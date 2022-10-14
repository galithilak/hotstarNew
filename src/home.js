const Home = () => {
    let images = [
        {img:"https://madovercricket.com/wp-content/uploads/2021/04/RCB-vs-KKR-IPL-2021-Match-10-Match-preview-RCB-vs-KKR-h2h.jpg"},
        {img:"https://cricnerds.com/wp-content/uploads/2020/10/AI_6400.jpg"},
        {img:"https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/09/29/Pictures/ipl-2020-royal-challengers-bangalore-indians-mumbai_6e0c7f72-01b9-11eb-a0ae-05799bfe6215.jpg"},
        {img:"https://images.hindustantimes.com/img/2022/05/24/1600x900/ipl-2020-rr-vs-rcb_917f8f72-2427-11eb-9c71-c26c1d2bb974_1653372865179.jpg"},
        {img:"https://cricnerds.com/wp-content/uploads/2020/10/3588749423001_4909947474001_highrcbgl.jpg"}
    ]
    return ( 
        <div className="home">
            <div className="poster">
                <img width="1300" height="500" src="https://wallpaperaccess.com/full/323408.jpg" alt="No Internet" />
            </div>

            <div className="h3">
                <h3>HIGHLIGHTS</h3>
            </div>
            <div className="highlights">
                { images.map((date)=>{
                    return (
                        <img width="220" height="170" src={date.img} alt="No Internet" />
                    )
                })}
            </div>
        </div>
     );
}
 
export default Home;