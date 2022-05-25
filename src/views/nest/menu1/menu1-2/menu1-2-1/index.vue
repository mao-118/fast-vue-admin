<template>
    <div class="app-container">
        <div class="menu">menu1
            <div>menu1-2
                <div>menu-1-2-1</div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
div{
    padding:10px;
}
.menu{
    background: #f4f4f5;
    div{
        background: lightblue;
        div{
            background: lightgreen;
        }
    }
}
</style>
