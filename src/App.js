import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick"
import EventBind from "./components/binding/EventBind";
import ParentComponent from "./components/binding/ParentComponent";
import UserGreeting from "./components/UserGreeting"
import NameList from "./components/liste/NameList";
import Stylesheet from "./components/styling/Stylesheet";
import Inline from "./components/styling/Inline";

import './appStyles.css'; // import css normale permette di utilizzarli anche nei componenti children
import styles from './appStyles.module.css';

import Form from "./components/forms/Form";
import FragmentDemo from "./components/fragment/FragmentDemo";
import Table from "./components/fragment/Table";
import PureComponentTutorial from "./components/performance-optimization/pureComponent/PureComponentTutorial";
import RefsDemo from "./components/refs/RefsDemo";
import ClassRefsDemo from "./components/refs/ClassRefsDemo";
import ClassRefsDemoParent from "./components/refs/ClassRefsDemoParent";
import ForwardRefParentComponent from "./components/refs/forwardRef/ForwardRefParentComponent";
import PortalDemo from "./components/portals/PortalDemo";
import Hero from "./components/lifecycle/ErrorBounderies/Hero";
import ErrorBoundary from "./components/lifecycle/ErrorBounderies/ErrorBoundary";
import ClickCounter from "./components/reuse-code-pattern/higher-order-component/ClickCounter";
import ClickCounterTwo from "./components/reuse-code-pattern/render-props/ClickCounterTwo";
import CounterRenderProps from "./components/reuse-code-pattern/render-props/Counter";
import UserContext from "./components/reuse-code-pattern/context/UserContext";
import UserContextConsumerDemo from "./components/reuse-code-pattern/context/UserContextConsumerDemo";
import UserContextConsumerDemo2 from "./components/reuse-code-pattern/context/UserContextConsumerDemo2";
import PostList from "./components/http/PostList";

function App() {
    const user = {name: "persona1", isLoggedIn: true, cf: "MRRADW13LOH512Q"}

    return (
        <UserContext.Provider value={user}>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>

                    <PostList/>

                    {/*<UserContextConsumerDemo2/>*/}
                    {/*<UserContextConsumerDemo/>*/}

                    {/*<CounterRenderProps render={(count, incrementCount) => (*/}
                    {/*    <ClickCounterTwo count={count} incrementCount={incrementCount}/>*/}
                    {/*    )}*/}
                    {/*/>*/}

                    {/*<ClickCounter/>*/}
                    {/*<ClickCounter/>*/}

                    {/*<Hero heroName={"Scarlet Witch"}/>*/}
                    {/*<Hero heroName={"Vision"}/>*/}
                    {/*<ErrorBoundary>*/}
                    {/*    <Hero heroName={"scarlet_witch"}/>*/}
                    {/*</ErrorBoundary>*/}

                    {/*<PortalDemo/>*/}

                    {/*<ForwardRefParentComponent/>*/}
                    {/*<ClassRefsDemoParent/>*/}
                    {/*<RefsDemo/>*/}

                    {/*<Table rows={3}/>*/}
                    {/*<FragmentDemo/>*/}

                    {/*<Form/>*/}

                    {/*<h1 className='error'>Error (uso css normale)</h1>*/}
                    {/*<h1 className={styles.success}>Success (uso css da modulo)</h1>*/}

                    {/*<Inline/>*/}
                    {/*<Stylesheet orangeText={true}/>*/}
                    {/*<NameList/>*/}
                    {/*<UserGreeting/>*/}
                    {/*<ParentComponent/>*/}
                    {/*<EventBind/>*/}
                    {/*<FunctionClick></FunctionClick>*/}
                    {/*<ClassClick/>*/}
                    {/*<Counter/>*/}
                    {/*<Message/>*/}


                    {/*Test Greet Component*/}
                    {/*    <Greet name="steve" heroName="captain america">*/}
                    {/*        <p>this is children</p>*/}
                    {/*    </Greet>*/}
                    {/*    <Greet name="bruce" heroName="hulk">*/}
                    {/*        <button>this is button</button>*/}
                    {/*    </Greet>*/}
                    {/*<Greet name="tony" heroName="iron man">*/}
                    {/*    <h6>this is sparta</h6>*/}
                    {/*</Greet>*/}

                    {/*<Welcome  name="steve" heroName="captain america"/>*/}
                    {/*  si possono scrivere anche come <nometag/>   */}
                    {/*<Welcome></Welcome>*/}
                    {/*<Hello/>*/}


                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        </UserContext.Provider>
    );
}

export default App;
