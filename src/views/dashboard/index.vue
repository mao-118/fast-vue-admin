<template>
  <div>
    <el-row :gutter="20">
      <el-col :md="5">
        <div class="title">USERS</div>
        <el-select v-model="value" filterable remote clearable reserve-keyword placeholder="Please enter a keyword"
          :remote-method="remoteMethod" :loading="loading" @change="handleChange">
          <el-option v-for="(item,index) in options" :key="index" :label="item.name" :value="item.name" />
        </el-select>
        <div class="userList">
          <div v-for="(item,index) in [...userList,...userList]" :key="index" class="userItem">
            <div class="topBox">
              <img :src="item.photo" class="photo">
              <span class="name">{{ item.name }}</span>
            </div>
            <div class="btnBox">
              <el-tag :type="index%2==0?'success':''">{{ item.tag }}</el-tag>
              <span class="price">${{ (index*100).toFixed(2) }}</span>
            </div>
          </div>
        </div>
      </el-col>
      <el-col class="container" :md="19">
        <el-row :gutter="10">
          <el-col v-for="(item, index) in dataList" :key="index" :xs="24" :sm="24" :md="12" :lg="8">
            <el-card>
              <div class="content">
                <a target="_blank" class="href-a" :href="item.href"><img class="href-img" :src="item.logo" alt=""></a>
                <span>{{ item.desc }}</span>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <div>
          <TodoList />
        </div>
        <div class="lineChart">
          <LineChart />
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script setup>
import Logo from '@/assets/logo.png';
import BlogSite from '@/assets/blog-site.png';
import TsVant from '@/assets/ts-vant.png';
import LineChart from './components/LineChart.vue';
import TodoList from './components/TodoList.vue';
const data = reactive({
  list: [
    {
      logo: Logo,
      desc: 'fast-vue-admin 是一个后台前端解决方案，它基于 vue3 和 element-plus实现。使用了最新的前端技术栈，提供了丰富的功能组件，可以帮助你快速搭建企业级中后台产品原型。',
      href: 'https://mao-118.github.io/fast-vue-admin-doc/'
    },
    {
      logo: TsVant,
      desc: 'vue3 + ts 移动端模板,组件库使用的是有赞的 vant ui 库',
      href: 'https://mao-118.github.io/vue-ts-vant-template/'
    },
    {
      logo: BlogSite,
      desc: '博客地址，持续更新。',
      href: 'https://mao-118.github.io/blog-site/'
    }
  ]
});
const dataList = toRef(data, 'list');
const userList = ref([]);
const initUserList = [
  { name: 'Kathyrn Murphy', tag: 'Design', photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80' },
  { name: 'Mert Cukuren', tag: 'Sales', photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80' },
  { name: 'Albert Flores', tag: 'Marketing', photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80' },
  { name: 'Jane Cooper', tag: 'Vue', photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80' },
  { name: 'Ronald Richards', tag: 'React', photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80' }
];
const options = ref([]);
const value = ref('');
const loading = ref(false);
const remoteMethod = (query) => {
  if (query) {
    loading.value = true;
    setTimeout(() => {
      loading.value = false;
      options.value = initUserList.filter((item) => {
        return item.name.toLowerCase().includes(query.toLowerCase());
      });
    }, 500);
  } else {
    options.value = [];
  }
};
const handleChange = () => {
  if (!value.value) return userList.value = initUserList;
  userList.value = initUserList.filter(item => item.name === value.value);
};
onMounted(() => {
  userList.value = initUserList;
});
</script>
<style lang="scss" scoped>
.el-col {
  margin-bottom: 10px;
}

.title {
  margin-bottom: 10px;
}

.userList {
  height: 1000px;
  overflow-y: scroll;
  margin-top: 30px;

  &::-webkit-scrollbar {
    // display: none;
  }

  .userItem {
    width: 80%;
    height: 100px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-sizing: border-box;
    background-color: #fff;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .topBox {
      width: 85%;
      border-bottom: 1px solid #ccc;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 10px 0;
      padding-bottom: 5px;
      box-sizing: border-box;

      .photo {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }

      .name {
        font-size: 14px;
      }
    }


    .btnBox {
      width: 85%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .price {
        font-size: 12px;
        margin-left: 10px;
      }
    }

  }
}

.content {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 200px;

  .href-a {
    width: 150px;
    height: 150px;

    .href-img {
      width: 100%;
      height: 100%;
      margin-right: 20px;
    }
  }

  span {
    width: 55%;
    font-size: 14px;
  }
}

.lineChart {
  margin-top: 50px;
  padding: 20px;
}
</style>
