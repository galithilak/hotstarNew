const AddFavs = () => {
    return ( 
        <div className="addFavs">

            <div className="form">
                <img height="100px" width="150px" src="https://png.pngtree.com/png-vector/20191201/ourmid/pngtree-crown-logo-design-vector-png-image_2066891.jpg" alt="" />
                <form action="">
                    <input type="text" placeholder="title"/>
                    <input type="text" placeholder="genre"/>
                    <input type="text" placeholder="language"/>
                    <input type="number" min="0" max="10" placeholder="rating"/>
                    <button>Add</button>
                </form>
            </div>

            <div className="content">
                <h1>Add your favourite movies and TV shows.</h1>
            </div>

        </div>
     );
}
 
export default AddFavs;