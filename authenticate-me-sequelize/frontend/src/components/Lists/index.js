import {fetch} from '../../store/csrf';
import {useEffect, useState} from 'react';

const ListsPage = () => {

    const [currentLists, setLists] = useState([])

    useEffect(async () => {
        const response = await fetch('/api/lists');
        // const user = await fetch('/api/users');
        console.log(response);
        // console.log(user);
        setLists(response.data.lists);
    }, []);

    return (
        <div id="list-wrapper">
            <h1>Pick a task list</h1>
            {!currentLists && <h3>Loading....</h3>}
            <ul>
                {currentLists && currentLists.map(list => {
                    return <li>{list.listName}</li>
                })}
            </ul>
            <a href="/create-list">Create a List</a>
        </div>
    );
};

export default ListsPage;
