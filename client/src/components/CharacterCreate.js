import React, { useState } from 'react';

function CharacterCreate() {
    const [keyStats, setKeyStats] = useState({
        class:'',
        race:'',
        level:'',
        abilities:{
            strength:'',
            dexterity:'',
            constitution:'',
            intelligence:'',
            wisdom:'',
            charisma:'',
        }
    });
    const [otherStats, setOtherStats] = useState({

    })

    const handleInputChange = (e) => {
        const {target} = e;
        const inputType = target.name;
        const inputVal = target.value;
    }

    const classList=['Barbarian','Bard','Cleric','Druid','Fighter','Monk','Paladin','Ranger','Rogue','Sorcerer','Warlock','Wizard']

    const raceList=['Dragonborn','Dwarf','Elf','Gnome','Half-Elf','Halfling','Half-Orc','Human','Tiefling']

    const handleFormSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <h1>New Character Sheet</h1>
            <form class=''>
                <input
                    value={this.state.value}
                    name="Character Name:"
                    onChange={handleInputChange}
                    type='text'
                    placeholder="Enter your character's name"
                />
                <input
                    value={this.state.value}
                    name="Class:"
                    onChange={handleInputChange}
                    list='classList'
                    placeholder="Enter your character's Class"
                />
                <datalist id='classList'>
                    {classList.map((item,index) => {
                        <option key={index} value={item} />
                    })}
                </datalist>
                <input
                    value={this.state.value}
                    name="Race:"
                    onChange={handleInputChange}
                    list='raceList'
                    placeholder="Enter your character's Race"
                />
                <datalist id='raceList'>
                    {raceList.map((item,index) => {
                        <option key={index} value={item} />
                    })}
                </datalist>
                <input
                    value={this.state.value}
                    name="Level:"
                    onChange={handleInputChange}
                    type='number'
                    min='1'
                    max='20'
                    placeholder='1'
                />
                <input
                    value={this.state.value}
                    name="Strength:"
                    onChange={handleInputChange}
                    type='number'
                    min='1'
                    max='30'
                    placeholder='10'
                />
                <input
                    value={this.state.value}
                    name="Dexterity:"
                    onChange={handleInputChange}
                    type='number'
                    min='1'
                    max='30'
                    placeholder='10'
                />
                <input
                    value={this.state.value}
                    name="Constitution:"
                    onChange={handleInputChange}
                    type='number'
                    min='1'
                    max='30'
                    placeholder='10'
                />
                <input
                    value={this.state.value}
                    name="Intelligence:"
                    onChange={handleInputChange}
                    type='number'
                    min='1'
                    max='30'
                    placeholder='10'
                />
                <input
                    value={this.state.value}
                    name="Wisdom:"
                    onChange={handleInputChange}
                    type='number'
                    min='1'
                    max='30'
                    placeholder='10'
                />
                <input
                    value={this.state.value}
                    name="Charisma:"
                    onChange={handleInputChange}
                    type='number'
                    min='1'
                    max='30'
                    placeholder='10'
                />


            </form>
        </div>
    );
}