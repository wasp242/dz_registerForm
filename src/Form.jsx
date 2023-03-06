import { useState } from "react";

export default function Form() {
    const [form, setForm] = useState({sex: 'M', secondApp: false})
    const submitHandler = (event) => {
        if (form.name && form.passport && form.age && form.email && form.phone  ){
            alert('Вы зарегистрированы')
            console.log(form)
        }   
        
    }
    return (
      <form>
        <div>
            <label htmlFor="">ФИО пациента:</label>
            <input 
                required 
                type="text" 
                onChange={(event=>(setForm({...form, name: event.target.value})))}/> 
        </div>
        <div>
            <label htmlFor="">Серия и номер паспорта:</label>
            <input required type="number" onChange={(event=>(setForm({...form, passport: event.target.value})))}/> 
        </div>
        <div>
            <label htmlFor="">Выбери пол</label>
            <select name="" id="" onChange={(event=>(setForm({...form, sex: event.target.value})))}>
                <option value="M">Мужской</option>
                <option value="F">Женский</option>
            </select>
        </div>
        <div>
            <label htmlFor="">Возраст:</label>
            <input required type="number" onChange={(event=>(setForm({...form, age: event.target.value})))}/> 
        </div>
        <div>
            <label htmlFor="">Email:</label>
            <br />
            <input required type="email" onChange={(event=>(setForm({...form, email: event.target.value})))}/> 
        </div>
        <div>
            <label htmlFor="">Телефон:</label>
            <input required type="number" onChange={(event=>(setForm({...form, phone: event.target.value})))}/>  
        </div>
        <div>
            <label htmlFor="">Описание симптомов:</label>
            <textarea rows="8" cols="28"  type="text" onChange={(event=>(setForm({...form, symps: event.target.value})))}></textarea> 
        </div>
        <div className="checkBox__div">
            <label htmlFor="">Повторный прием:</label>
            <input className="checkbox" type="checkbox" checked={form.secondApp} onChange={()=>(setForm({...form, secondApp: !form.secondApp }))} />
        </div>
        <button type="submit" onClick={submitHandler}>Отправить</button>
      </form>
    );
  }
  

  