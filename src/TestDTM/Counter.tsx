import { observer } from "mobx-react-lite";
import counter from "./Store/Counter";
import "./styles.css";

const CounterTemplate = () => {
    return (
        <>
            {"Counter " + counter.count}
            <div className="btn">
                <button className="btn__incCount"
                        onClick={() => {
                            counter.inc();
                        }}>
                    +
                </button>
                <button onClick={() => {
                    counter.dec();
                }}>
                    -
                </button>
            </div>
        </>
    );
};

export const Counter = observer(CounterTemplate);