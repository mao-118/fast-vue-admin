import Mock from "mockjs"
const {array} = Mock.mock({
    'array|200':[
        {
            "name|+1": [
                "张三",
                "李四",
                "王五"
            ],
            "date|+1": [
                "2022/1/1",
                "2022/11/11",
                "2022/12/12"
            ],
            "address|+1": [
                "浙江杭州",
                "上海万达",
                "四川成都"
            ],
        }
    ]
})
export default [
    {
        url:'/api/demoList',
        method:'get',
        response:({query})=>{
            const {page,pre_size} = query
            const list=[]
            const intPage = parseInt(page)
            const intPageSize = parseInt(pre_size)
            for(let i=(intPage-1)*intPageSize;i<(intPage-1)*intPageSize+intPageSize;i++){
                list.push(array[i])
            }
            return {
                code: 200,
                data: {
                    total:200,
                    list
                },
                msg: ''
            }
        }
    }
]