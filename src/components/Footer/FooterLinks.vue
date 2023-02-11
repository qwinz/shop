<template>
    <div class="footerLinks">
        <slot name="links">slot</slot>
        <!-- 客服插槽 -->
        <slot name="contact"></slot>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.footerLinks{
    padding: 40px 0;
    overflow: auto;
}
.footerLinks dl.empty{
    height: 25px;
}
.footerLinks dl{
    width: 160px;
    float: left;
}
.footerLinks dd{
    margin: 10px 0;
}
.footerLinks dt{
    padding-bottom: 10px;
}
.contact{
        float: right;
        width: 251px;
        border-left: 1px solid #e0e0e0;
        text-align: center;
        color: #616161;
}
.contact a.contactBtn{
    display: inline-block;
    width: 118px;
    height: 28px;
    font-size: var(--baseSize);
    line-height: 28px;
    border: 1px solid #ff6700;
    background: #fff;
}
.contact a.contactBtn:link{
    color: #ff6700;
}
.contact a.contactBtn:hover{
    color: white;
    background: #ff6700;
}
.contact p.phone{
    color: #ff6a00;
    font-size: 20px;
}
.contact p.time{
    margin: 5px 0;
    font-size: var(--baseSize);
}
</style>