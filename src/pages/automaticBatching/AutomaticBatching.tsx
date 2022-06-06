// 在React 18 之前，我们只在 React 事件处理函数中进行批处理更新。默认情况下，在promise、setTimeout、原生事件处理函数中、或任何其它事件内的更新都不会进行批处理

import { useState } from 'react';
import { flushSync } from 'react-dom';

const AutomaticBatching: React.FC = () => {
    console.log('App组件渲染了！');
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    return (
        <div>
            <div>count1： {count1}</div>
            <div>count2： {count2}</div>
            <div
                onClick={() => {
                    setTimeout(() => {
                        // 可以使用flushSync退出批量更新
                        flushSync(() => {
                            setCount1(count => count + 1);
                        });
                        flushSync(() => {
                            setCount2(count => count + 1);
                        });

                        // 批量更新
                        // setCount1(count => count + 1);
                        // setCount2(count => count + 1);
                    });
                }}
            >
                count++
            </div>
        </div>
    );
};

export default AutomaticBatching;
