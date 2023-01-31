import React from 'react';

export default function PostsPage({ params }) {
    /* ASI LO HARIAMOS CON REACT NORMALMENTE
    const [posts, setPosts] = useState([])
    const { id } = params
    
    useEffect(() => {
        fetch('https://URL')
            .then(res => res.json())
            .then(data => {
                setPosts(data)
            })
    })
     */


    const { id } = params;
    return (
        <h1>Post Individual: {id}</h1>
    )
}
