
import {useState} from 'react';

const CreateTaskForm = () => {

    const [currentTaskName, setTaskName] = useState('');
    const [currentNote, setNote] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return(
        <div id='task-form-wrapper'>
            <form>
                <ul class="flex-outer">
                    <li>
                        <label for='taskName'>Task Name: </label>
                        <input
                            type='text'
                            id='task-name'
                            name='taskName'
                            onChange={(e) => setTaskName(e.target.value)}
                        />
                    </li>
                    <li>

                    <label for='note'>Notes: </label>
                        <textarea
                            name='note'
                            id='note-textarea'
                            onChange={(e) => setNote(e.target.value)}
                        />
                    </li>
                    <li>
                        <button type="submit">add task</button>
                    </li>
                </ul>
            </form>
        </div>
    );
};

export default CreateTaskForm;
