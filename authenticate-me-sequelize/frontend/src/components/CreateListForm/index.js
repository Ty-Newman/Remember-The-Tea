import {useState} from 'react';

const CreateListForm = () => {

    const [currentListName, setListName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return(
        <div id='list-form-wrapper'>
            <form>
                <ul class="flex-outer">
                    <li>
                        <label for='listName'>List Name: </label>
                        <input
                            type='text'
                            id='list-name'
                            name='listName'
                            onChange={(e) => setListName(e.target.value)}
                            />
                    </li>
                    <li>
                        <button type="submit">add list</button>
                    </li>
                </ul>
            </form>
        </div>
    );
};

export default CreateListForm;
