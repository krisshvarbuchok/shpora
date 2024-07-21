
const HOC = () =>{


    return(
        <>
            <div className="text-blok">
                <h1><strong>HOС (Higher-Order Components)</strong></h1>
                <p><strong>HOC</strong> — это функции высшего порядка, которые принимают компонент и возвращают новый компонент с расширенным функционалом. </p>
                <p>Они помогают избежать дублирования кода, позволяют повысить переиспользуемость компонентов,  управлять состоянием, обеспечивают абстракцию поведения и позволяют добавлять функциональность к компонентам <strong>без изменения их кода</strong>.</p>
                <ul>HOC решает несколько проблем в разработке React-приложений:
                    <li><strong>Логическое переиспользование</strong>: HOC позволяют выделить общую логику компонентов, такую как обработка аутентификации или получение данных, и применять ее ко множеству компонентов без дублирования кода.</li>
                    <li><strong>Прокинуть дополнительные props</strong>: HOC позволяют добавлять или модифицировать props компонентов. Это удобно, например, для передачи данных из контекста или оборачивания компонентов в дополнительные компоненты высшего порядка.</li>
                    <li><strong>Обертывание компонентов</strong>: HOC могут использоваться для обертывания компонентов дополнительным функциональным слоем, например, для логирования, манипуляции с состоянием и т.д.</li>
                </ul>
                <p><strong>Создание HOC:</strong></p>
                <p>1. Напиши функцию, которая принимает компонент в качестве аргумента.</p>
                <p>2. Внутри функции определи новый компонент, который использует переданный компонент и может добавлять ему дополнительную функциональность.</p>
                <p>3. Верни этот новый компонент.</p>
            </div>
            <div className="code-blok">
                <pre>
                    <code>{
`const withLogger = (WrappedComponent) => {
  return (props) => {
    console.log('Component rendered:', WrappedComponent.name);
    const extraProps = { additionalProp: "I'm extra!" };
    //добавили дополнительные пропсы
    return <WrappedComponent {...props} {...extraProps} />;
  };
};`
                        }</code>
                </pre>
            </div>
            <div className="text-blok">
                <p>Применение HOC:</p>
            </div>
            <div className="code-blok">
                <pre>
                    <code>{
`// Применение HOC к компоненту 
//в App.js
const CounterWithHOC = withCounter(Counter);
//с самим компонентом Counter можно ничего не делать
//он может сам функционировать

// Компонент, использующий обернутый компонент с HOC
const App = () => {
  return (
    <div>
      <h1>Counter App</h1>
      <CounterWithHOC />
    </div>
  );
};`
                        }</code>
                </pre>
            </div>
            <div className="text-blok">
                <p><strong> Управление состоянием</strong></p>
            </div>
            <div className="code-blok">
                <pre>
                    <code>{
`// HOC
const withCounter = (WrappedComponent) => {
  return (props) => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
      setCount(count + 1);
    };

    return (
      <WrappedComponent
        count={count}
        incrementCount={incrementCount}
        {...props}
      />
    );
  };
};

// Компонент, который будет обернут HOC
const Counter = ({ count, incrementCount }) => {
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};`
                        }</code>
                </pre>
            </div>
            <div className="text-blok">
                <p><strong> Логирование</strong></p>
            </div>
            <div className="code-blok">
                <pre>
                    <code>{
`import React, { useEffect } from 'react';

const withLogger = (WrappedComponent) => {
  return (props) => {
    useEffect(() => {
      console.log('Component {WrappedComponent.name} mounted.');
    }, []);

    return <WrappedComponent {...props} />;
  };
};`
                        }</code>
                </pre>
            </div>
            <div className="text-blok">
                <p><strong>Аутентификация</strong></p>
            </div>
            <div className="code-blok">
                <pre>
                    <code>{
`const withAuth = (WrappedComponent) => {
  return (props) => {
    const isAuthenticated = checkAuthStatus(); // Предположим, здесь происходит проверка аутентификации.
    if (isAuthenticated) {
      return <WrappedComponent {...props} />;
    } else {
      return <p>Please log in to access this content.</p>;
    }
  };
};

//в App.js
const AuthenticatedComponent = withAuth(ProfileComponent);`
                        }</code>
                </pre>
            </div>
            <div className="text-blok">
                <p><strong>Локализация</strong></p>
            </div>
            <div className="code-blok">
                <pre>
                    <code>{
`const withLocalization = (WrappedComponent) => {
  return (props) => {
    const locale = getCurrentLocale(); // Получение текущей локали.
    const localizedContent = getLocalizedContent(locale);
    return <WrappedComponent {...props} localizedContent={localizedContent} />;
  };
};

//в App.js
const LocalizedProfile = withLocalization(ProfileComponent);`
                        }</code>
                </pre>
            </div>
        </>
    )
}
export default HOC;
