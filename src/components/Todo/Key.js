const Key=()=>{


    return (
        <>
            <div className="text-blok">
                <h1>Ключи</h1>
                <p>Ключи помогают React определять, какие элементы были изменены, добавлены или удалены. Их необходимо указывать, чтобы React мог сопоставлять элементы массива с течением времени:</p>

            </div>
            <div className="code-blok">
                <pre>
                    <code>{
`const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => <li key={number}>
        {number}
    </li>
);`
                        }</code>
                </pre>
            </div>
            <div className="text-blok">
                <p>Лучший способ выбрать ключ — это использовать строку, которая будет явно отличать элемент списка от его соседей. Чаще всего вы будете использовать ID из ваших данных как ключи. Ключи нужно определять непосредственно внутри массивов. Если не указать ключи, в консоли увидим сообщение:</p>
            </div>
            <div className="code-blok">
                <pre>
                    <code>{
`Warning: Each child in an array or iterator should have a unique “key” prop.

 arr :[
        {id: 1, name: 'Alice', age: 25},
        {id: 2, name: 'Bob', age: 30},
        {id: 3, name: 'Charlie', age: 40}
      ]
`
                        }</code>
                </pre>
            </div>
            <div className="text-blok">
                <p>Без key механизм <strong>reconciliation</strong> сверяет компоненты попарно между текущим и новым VDOM. Из-за этого может происходить большое количество лишних перерисовок интерфейса, что замедляет работу приложения.</p>
                <p>Добавляя key, вы помогаете механизму reconciliation тем, что с key он сверяет не попарно, а ищет компоненты с тем же key (тег / имя компонента при этом учитывается) — это уменьшает количество перерисовок интерфейса. Обновлены/добавлены будут только те элементы, которые были изменены/не встречались в предыдущем дереве.</p>
                <p>Следите, чтобы не появлялись дублирующие key, при переключении отображения у новых данных не совпадали ключи. Это может привести к нежелательным сайд-эффектам, таким как анимации, или некорректной логике поведения элемента.</p>
                <p> Если нет ID используй библиотеку <strong>uuid</strong>:</p>
            </div>
            <div className="code-blok">
                <pre>
                    <code>{
`import { v4 as uuidv4 } from 'uuid';

const arr = [{ id: 1, name: 'Alice', age: 25 }];
..
setItems(prevItems => [...prevItems, { name: newText, id: uuidv4() }]);
..
//либо использовать встроенную функцию, без установки библиотеки
const uuid = crypto.randomUUID();
console.log(uuid); 
// Выведет строку в формате UUID, например '123e4567-e89b-12d3-a456-426614174000'`
                        }</code>
                </pre>
            </div>
        </>
    )
}
export default Key;