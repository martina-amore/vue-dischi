const app = new Vue ({
    el: "#root",
    data: {
        disks: [],
    },
    mounted(){
        axios
        .get("https://flynn.boolean.careers/exercises/api/array/music")
        .then((answer) => {
            this.disks = answer.data.response;
        })
    }
})
