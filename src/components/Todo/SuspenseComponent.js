
const SuspenseComponent = () =>{

    return(
        <>
            <div className="text-blok">
                <h1><strong>Suspense</strong></h1>
                <p><strong>Suspense</strong> позволяет <strong>откладывать</strong> рендеринг компонентов до тех пор, <strong>пока не будут выполнены асинхронные операции</strong>, такие как загрузка данных. Это полезно для создания “плавного”, “положительного” пользовательского опыта, где загрузка данных происходит "за кулисами", и пользователь видит только готовый результат. </p>
                <p>Компонент <strong>Suspense</strong> позволяет обернуть часть твоего приложения, которая требует асинхронных данных. Он показывает запасной UI (например, индикатор загрузки) до тех пор, пока все асинхронные операции не будут завершены.</p>
                <p><strong>fallback</strong> — это проп, который принимает компонент, показываемый пока данные загружаются. В примере выше, fallback={`<div>Загрузка...</div>`} означает, что пока данные для MyComponent загружаются, пользователь увидит текст "Загрузка...".</p>
            </div>
            <div className="code-blok">
                <pre>
                    <code>{
`import React, { Suspense } from 'react';
import MyComponent from './MyComponent';

function App() {
  return (
    <div>
      <Suspense fallback={<div>Загрузка...</div>}>
        <MyComponent />
      </Suspense>
    </div>
  );
}

export default App;`
                        }</code>
                </pre>
            </div>
        </>
    )
}
export default SuspenseComponent;