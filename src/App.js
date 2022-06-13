import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { FiSettings } from 'react-icons/fi'
import { Navbar, Footer, Sidebar, ThemeSettings } from './components'
import { ECommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor, Line } from './pages'
import { useStateContext } from './contexts/ContextProvider'
import './App.css'

const App = () => {
    // const headers = { 'x-api-key': 'NDNmMjFjN2IyYzIxNDgxMjkwMmQyMDc1YmRkNWM5MTktMTY1NDgyNzY3OA==' }
    // fetch('https://craft-api.dev.surreal-ai.com/v1/internal/movio/font.list', { headers })
    //     .then(response => response.json())
    //     .then(data => console.log(data));
    // return (
    //     <div>App</div>
    // )
    const { activeMenu } = useStateContext();

    return (
        <div>
            <BrowserRouter>
                <div className='flex relative dark:bg-main-dark-bg'>
                    <div className='fixed right-4 bottom-4' style={{ zIndex: '1000'}}>
                        <TooltipComponent content="Settings" position='Top'>
                            <button type='button' className='text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray' style={{ background: 'lightblue', borderRadius: '50%'}}>
                                <FiSettings />
                            </button>
                        </TooltipComponent>
                    </div>
                    {activeMenu? (
                        <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
                            <Sidebar />
                        </div>
                    ):(
                        <div className='w-0 dark:bg-secondary-dark-bg'>
                            <Sidebar />
                        </div>
                    )}
                    <div className={
                        `dark:bg-main-bg bg-main-bg min-h-screen w-full ${
                            activeMenu ? 'md:ml-72' : 'flex-2'
                        }`
                    }>
                        <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                            <Navbar />
                        </div>
                    
                    <div>
                        <Routes>
                                <Route path='/' element={ <ECommerce /> }></Route>
                                <Route path='/fonts' element={ <Orders /> }></Route>
                                <Route path='/other1' element={ <Employees /> }></Route>
                                <Route path='/other2' element={ <Customers /> }></Route>
                        </Routes>
                    </div>
                </div>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App