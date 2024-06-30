const FormComponent = () => {


    return (
        <>
            <div className="text-blok">
                <h1>Работа с формами</h1>
                <p>Современный подход заключается в использовании библиотек React Hook Form и Formik</p>
                <p>React Hook Form:</p>
                <p><strong>Установи библиотеку React Hook Form:</strong></p>
            </div>
            <div className="code-blok">
                <pre>
                    <code>{
`npm install react-hook-form`
                    }</code>
                </pre>
            </div>
            <div className="text-blok">
                <p><strong>Импорт библиотеки и Инициализация Хука</strong></p>
            </div>
            <div className="code-blok">
                <pre>
                    <code>{
`import { useForm } from 'react-hook-form'

const FormWithRHF = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();`
                        }</code>
                </pre>
            </div>
            <div className="text-blok">
                <p><strong>Создание Формы и Добавление Полей</strong></p>
            </div>
            <div className="code-blok">
                <pre>
                    <code>{
`//App.js
return (
    <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Имя:</label>
            <input {...register('name')} />
            ..
        </form>
    </>`
                        }</code>
                </pre>
            </div>
            <div className="text-blok">
                <p><strong>Валидация</strong></p>
                <p><strong>register</strong> - это функция из библиотеки react-hook-form, которая используется для связывания инпутов и других элементов формы с состоянием и валидацией формы.</p>
                <p><strong>register('fieldName', validationRules)</strong>- регистрируется поле, <strong>связывая его с именем fieldName</strong>, применяет указанные <strong>правила валидации (validationRules)</strong> к этому полю.</p>
            </div>
            <div className="code-blok">
                <pre>
                    <code>{
`<input {...register('email', { required: 'Введите email' })} />
<p>{errors.email?.message}</p>`
                        }</code>
                </pre>
            </div>
            <div className="text-blok">
                <p>Здесь мы добавили правило, что поле email <strong>обязательно(required)</strong> для заполнения. Если это поле останется пустым, будет показано сообщение "Введите email".</p>
            </div>
            <div className="code-blok">
                <pre>
                    <code>{
`pattern: {
    value: /^[А-Яа-яЁёA-Za-z0-9]+$/,
    message: 'неверное имя',
},
    
minLength: {
    value: 6,
    message: 'слишком короткий, нужно минимум 6 символов'
},

`
                        }</code>
                </pre>
            </div>
            <div className="text-blok">
                <p>Поле с чекбоксом</p>
            </div>
            <div className="code-blok">
                <pre>
                    <code>{
`<label>Ваш пол</label>
            <div>
                <label>
                    <input type="radio" {...register('gender', 
                        { required: 'Выберите пол' })} value="male" />
                    Мужской
                </label>
                <label>
                    <input type="radio" {...register('gender', 
                        { required: 'Выберите пол' })} value="female" />
                    Женский
                </label>
            </div>`
                        }</code>
                </pre>
            </div>
            <div className="text-blok">
                <p>Поле для повторного введения пароля</p>
            </div>
            <div className="code-blok">
                <pre>
                    <code>{
`const FormWithRHF = () => {
    const {.. watch, ..} = useForm();
    const password = watch('password'); //поле с первым введением пароля

//return
<label>Повторите пароль</label>
            <input {...register('repeatPassword', {
                required: 'Обязательное поле',
                validate: value =>
                    value === password || 'Пароли не совпадают'
            })} />
            <p>{errors.repeatPassword?.message}</p>`
                        }</code>
                </pre>
            </div>
            <div className="text-blok">
                <p><strong>Обработка Отправки и добавление кнопки "Отправить"</strong></p>
            </div>
            <div className="code-blok">
                <pre>
                    <code>{
`//App.js (до рендера) 
const onSubmit = (data) => {
  console.log(data);
};
..
return(
//все поля и их валидация
..
<button type="submit">Отправить</button>
)
`
                        }</code>
                </pre>
            </div>
        </>
    )
}
export default FormComponent;