import { useEffect, useState, useTransition } from 'react';

const ConcurrentAPIS: React.FC = () => {
    const [list, setList] = useState<any[]>([]);
    const [isPending, startTransition] = useTransition();
    useEffect(() => {
        // 使用了并发特性，开启并发更新
        // startTransition(() => {
        //     setList(new Array(10000).fill(null));
        // });

        // 未使用并发特性，打开执行堆栈看看两者js的执行时间
        setList(new Array(20000).fill(null));
    }, []);
    return (
        <>
            {list.map((_, i) => (
                <div key={i}>{i}</div>
            ))}
        </>
    );
};

export default ConcurrentAPIS;
