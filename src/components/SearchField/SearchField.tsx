import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import UserAction from '../../actions/UserAction'
import APP_CONST from '../../consts/APP_CONST'
import './SearchField.scss'

interface SearchFieldProps {

}

const ENTITIES = [APP_CONST.USERS, APP_CONST.REPOSITORY]

const SearchField: React.FC<SearchFieldProps> = ({ }) => {
    const [inputText, setInputText] = useState<string>('')
    const [selectedEntity, setSelectedEntity] = useState<string>(APP_CONST.USERS)
    const dispatch = useDispatch()

    const handleInputText = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value)
    }

    const handleDropDown = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedEntity(event.target.value)
    }

    useEffect(() => {
        dispatch(UserAction.getUsers())
    }, [])

    return (
        <section className="search-field-section row">
            <div className="text-group col">
                <input type="text" className="form-control" placeholder="Start Typing to seach.." onChange={handleInputText} value={inputText} />
            </div>
            <div className="select-group col">
                <select className="form-control" onChange={handleDropDown} value={selectedEntity}>
                    {ENTITIES.map(option => <option key={option} value={option}>{option}</option>)}
                </select>
            </div>
        </section>
    );
}

export default SearchField