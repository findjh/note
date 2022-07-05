```vue
<template>
  <div>
    <div v-for="(spec) in specList" :key="spec.id" style="margin-bottom:10px">
      <span style="margin-right:20px">{{ spec.name }}:</span>
      <el-button v-for="(item) in spec.items" :type="isActive(item) ? 'primary' : ''"
        @click="handleClick(item, spec.id)" :disabled="item.disabled" :key="item.id" style="margin-right:10px">
        {{
            item.name
        }}</el-button>
    </div>
    <div>可选组合</div>
    <div v-for="(item, index) in packages" :key="index">
      <span v-for="spec in item" :key="spec.spec_id">{{ spec.value }}-</span>
    </div>
  </div>
</template>

<script>

let specList = [
  { name: '颜色', id: 643, items: [{ name: '黑', id: 66, disabled: false, }, { name: '白', id: 76, disabled: false, }] },
  { name: '尺寸', id: 512, items: [{ name: 'M', id: 89, disabled: false, }, { name: 'L', id: 99, disabled: false, }, { name: 'S', id: 199, disabled: false, }] },
  { name: '性别', id: 893, items: [{ name: '男', id: 49, disabled: false, }, { name: '女', id: 29, disabled: false, }] },
  { name: '版型', id: 393, items: [{ name: 'oversize', id: 19, disabled: false, }, { name: '合身', id: 6629, disabled: false, }] },
  { name: '图案', id: 101, items: [{ name: 'helloKitty', id: 1010, disabled: false, }, { name: '恐龙', id: 1201, disabled: false, }] },
]
let packages = [
  [{ spec_id: 643, name: '颜色', value_id: 66, value: '黑' },
  { spec_id: 512, name: '尺寸', value_id: 89, value: 'M' },
  { spec_id: 893, name: '性别', value_id: 49, value: '男' },
  { spec_id: 393, name: '版型', value_id: 19, value: 'oversize' },
  { spec_id: 101, name: '图案', value_id: 1010, value: 'helloKitty' },
  ],
  [{ spec_id: 643, name: '颜色', value_id: 66, value: '黑' },
  { spec_id: 512, name: '尺寸', value_id: 89, value: 'M' },
  { spec_id: 893, name: '性别', value_id: 29, value: '女' },
  { spec_id: 393, name: '版型', value_id: 19, value: 'oversize' },
  { spec_id: 101, name: '图案', value_id: 1010, value: 'helloKitty' },
  ],
  [{ spec_id: 643, name: '颜色', value_id: 76, value: '白' },
  { spec_id: 512, name: '尺寸', value_id: 99, value: 'L' },
  { spec_id: 893, name: '性别', value_id: 29, value: '女' },
  { spec_id: 393, name: '版型', value_id: 6629, value: '合身' },
  { spec_id: 101, name: '图案', value_id: 1201, value: '恐龙' },
  ],
  [{ spec_id: 643, name: '颜色', value_id: 76, value: '白' },
  { spec_id: 512, name: '尺寸', value_id: 199, value: 'S' },
  { spec_id: 893, name: '性别', value_id: 29, value: '女' },
  { spec_id: 393, name: '版型', value_id: 19, value: 'oversize' },
  { spec_id: 101, name: '图案', value_id: 1010, value: 'helloKitty' },

  ],
]
const selectable = {}

export default {
  components: {},
  data() {
    return {
      specList,
      packages,
      selectedList: [],
      // selectable: {}
    };
  },
  created() {
    this.getSelectable();
    this.init();
  },
  watch: {

  },
  computed: {},
  mounted() {
  },
  methods: {
    getSelectable() {
      // const selectable = {}
      specList.forEach((spec, rowIndex) => {
        const selectableList = {}
        spec.items.forEach(item => {
          selectableList[item.id] = {
            matchItems: {},
            value: item.name,
          }
          const packs = packages.filter(pack => {
            const t = pack[rowIndex].value_id;
            return t === item.id
          })
          for (let i = 0; i < packs.length; i++) {
            const valueArr = packs[i];
            for (let k = 0; k < valueArr.length; k++) {
              if (k == rowIndex) {
                continue;
              }
              const val = valueArr[k]
              const matchItem = selectableList[item.id].matchItems[val.spec_id];
              if (matchItem && !matchItem.some(m => m.value_id === val.value_id)) {
                matchItem.push(val)
              } else if (!matchItem) {
                selectableList[item.id].matchItems[val.spec_id] = [val]
              }
            }
          }
        })
        selectable[spec.id] = {
          name: spec.name,
          selectableList
        }
      })
      // this.selectable = selectable;
    },
    init() {
      this.specList.forEach((spec, index) => {
        spec.items.forEach(item => {
          item.disabled = !packages.some(pack => pack[index].value_id == item.id)
        })
      })
    },
    handleClick(item, specId) {
      const { disabled, id } = item;
      if (disabled) {
        return;
      }
      //清除所有禁选
      this.clearAllDisabled();
      //找出当前点击的规格是否已经存在了。  已存在：取消操作；不存在：选择操作
      const find = this.selectedList.find(item => item.value_id == id);

      this.selectedList = this.selectedList.filter(item => item.specId !== specId);
      !find && this.selectedList.push({ value_id: item.id, specId })
      this.selectedList.forEach(item => {
        this.handleSelectOption(item.value_id, item.specId)
      })
    },
    handleSelectOption(value_id, specId) {
      const matchItems = selectable[specId].selectableList[value_id].matchItems
      // console.log(matchItems)
      for (let key in matchItems) {
        let spec = this.specList.find(item => item.id == key);
        let matchItem = matchItems[key];
        if (spec) {
          spec.items.forEach(item => {
            const canSelect = matchItem.some(c => c.value_id == item.id);
            !item.disabled && (item.disabled = !canSelect)
          })
        }
      }
    },
    //清除所有禁选
    clearAllDisabled() {
      this.specList.forEach(row => {
        row.items.forEach(specs => {
          specs.disabled = false;
        })
      })
    },
    isActive(spec) {
      return this.selectedList.find(item => item.value_id == spec.id)
    }
  },
}

</script>
<style lang='scss' scoped>
.active {
  background-color: rgb(200, 86, 105);
}
</style>

```

