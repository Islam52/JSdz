const fetchall = async () => {
    try {
        const data = await Promise.allSettled([
            fetchUsers(),
            fetchPosts(),
            fetchAlbums(),
        ])
        console.log(data);
    } catch (e) {
       console.error(e)
    }
}

fetchall();