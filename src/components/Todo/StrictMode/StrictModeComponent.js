
const StrictModeComponent =()=>{

    return (
        <>
            <div className="text-blok">
                <h1><strong>StrictMode</strong></h1>
                <p><strong>React.StrictMode</strong> – это инструмент, встроенный в React, который помогает разработчикам выявлять потенциальные проблемы в приложениях. Он добавляет дополнительные проверки и предупреждения как для компонентов, так и для методов жизненного цикла, что позволяет более надежно разрабатывать и поддерживать кодовую базу.</p>
                <ul>
                    <li><strong>Выявление небезопасных методов жизненного цикла:</strong> Уведомляет о методах, которые могут вызвать проблемы в будущем. <strong>componentWillMount, componentWillReceiveProps, componentWillUpdate</strong> - эти методы считаются устаревшими и небезопасными, так как могут привести к ошибкам при асинхронных обновлениях.</li>
                    <li><strong>Предупреждения об использовании устаревших API:</strong> Помогает обнаружить и устранить использование устаревших и небезопасных API (Метод findDOMNode устарел, и его использование может привести к проблемам).</li>
                    <li><strong>Обнаружение побочных эффектов:</strong> Помогает находить и устранять ошибки, связанные с побочными эффектами в методах жизненного цикла. Компоненты могут монтироваться и размонтироваться дважды при разработке, что помогает выявить побочные эффекты и ошибки.</li>
                    <li><strong>Улучшение производительности:</strong> Помогает оптимизировать приложение, выявляя потенциальные проблемы с производительностью.</li>
                </ul>
                <p>Его можно обернуть вокруг всего приложения или вокруг отдельных компонентов. Пример использования:</p>
            </div>
            <div className="code-blok">
                <pre>
                    <code>{
`// App.js
import React from 'react';
import MyComponent from './MyComponent';

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <h1>Strict Mode Example</h1>
        <MyComponent />
      </div>
    </React.StrictMode>
  );
};

export default App;`
                        }</code>
                </pre>
            </div>
        </>
    )
}
export default StrictModeComponent;