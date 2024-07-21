
const UseMemo = () => {


    return (
        <>
            <div className="text-blok">
                <h1>useMemo</h1>
                <p>React хук <strong>useMemo</strong> предназначен для <strong>мемоизации</strong> вычислений в функциональных компонентах. Он позволяет <strong>сохранять</strong> результат вычислений и <strong>повторно использовать</strong> его, если входные значения (зависимости) <strong>не изменились</strong>. Это может существенно повысить производительность, особенно в случаях, когда сложные вычисления выполняются при каждом рендеринге компонента.</p>
                <p>React.memo прописывается в самом дочернем компоненте, а useMemo прописывается в родительском компоненте, записывая результат вычисления в переменную, а переменная уже прописывается в return.</p>
                <ul>Используется для:
                    <li>Вычисления производительной функции: вычисления, требующие много времени или ресурсов, например, фильтрация или сортировка массива данных</li>
                    <li>Кэширование компонента</li>
                </ul>
            </div>
            <div className="code-blok">
                <pre>
                    <code>{
`import { useMemo } from 'react';

const ExpensiveComponent = ({ propA, propB }) => {
  // Сложный компонент, требующий много ресурсов
  return (
    // ...
  );
};

const ParentComponent = ({ data }) => {
    const processedData = useMemo(() => {
        // Вычисления производительной функции
        return processData(data);
    }, [data]); // Зависимость - значение пропса "data"

    const cachedComponent = useMemo(() => {
    // Компонент будет кэширован при каждом изменении propA или propB
    return <ExpensiveComponent propA={propA} propB={propB} />;
    }, [propA, propB]);

    return (
        <div>
            <p>{processedData}</p>
            <p>{cachedComponent}</p>
        </div>
  );
};`   
                        }</code>
                </pre>
            </div>
        </>
    )
}

export default UseMemo;