
const ProfilerComponent = () =>{

    return (
        <>
            <div className="text-blok">
                <h1><strong>Profiler</strong></h1>
                <p><strong>React.Profiler </strong>— это инструмент, встроенный в React, который позволяет измерять производительность компонентов приложения. Он помогает выявить узкие места и оптимизировать рендеринг, предоставляя информацию о времени рендеринга и количестве рендеров. Это особенно полезно для крупных приложений, где производительность играет ключевую роль.</p>
            </div>
            <div className="code-blok">
                <pre>
                    <code>{
`import React, { Profiler } from 'react';`
                        }</code>
                </pre>
            </div>
            <div className="text-blok">
                <p>Компонент Profiler принимает два обязательных пропса: <strong>id</strong> и <strong>onRenderCallback</strong>. </p>
                <p>Проп <strong>id</strong> используется для идентификации профилируемого компонента, а <strong>onRenderCallback</strong> — это функция обратного вызова, которая вызывается при каждом рендеринге профилируемого компонента или дерева компонентов.</p>
            </div>
            <div className="code-blok">
                <pre>
                    <code>{
`const onRenderCallback = (
  id, // ID профилируемого дерева, для идентификации данного профайлера
  phase, // "mount" (при первом монтировании) или "update" (при повторных рендерах)
  actualDuration, // Время, затраченное на рендеринг профилируемого дерева
  baseDuration, // Время, которое заняло бы рендеринг всего дерева без кеширования
  startTime, // Время начала рендеринга
  commitTime, // Время завершения рендеринга
  interactions // Набор "взаимодействий" для рендеринга
) => {
  console.log({
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions,
  });
};

const App = () => {
  return (
    <Profiler id="App" onRenderCallback={onRenderCallback}>
      <div>
        <h1>App with Profiler</h1>
        <MyComponent />
      </div>
    </Profiler>
  );
};

export default App;`
                        }</code>
                </pre>
            </div>
            <div className="text-blok">
                <ul>После того как собрали данные профилирования, мы можемпредпринять несколько шагов для оптимизации:
                    <li><strong>Мемоизация компонентов React.memo</strong></li>
                    <li><strong>Использование хуков useMemo и useCallback</strong></li>
                    <li><strong>Разделение кода, React.lazy и Suspense</strong></li>
                </ul>
            </div>
            <div className="code-blok">
                <pre>
                    <code>{
`//React.memo
import React, { memo } from 'react';

const MyComponent = memo(() => {
  //  компонент
});


//useMemo, useCallback
import React, { useMemo, useCallback } from 'react';

const MyComponent = ({ data }) => {
  const computedValue = useMemo(() => {
    // Долгая вычислительная функция
    return expensiveComputation(data);
  }, [data]);

  const handleClick = useCallback(() => {
    // Обработчик клика
  }, []);

  return <div onClick={handleClick}>{computedValue}</div>;
};

//React.lazy и Suspense
import React, { Suspense, lazy } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
};`
                        }</code>
                </pre>
            </div>
        </>
    )
}
export default ProfilerComponent;