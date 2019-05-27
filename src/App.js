import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { adminRoutes } from './routes'
import Frame from './components/Frame'

export default class App extends Component {
    render() {
        return (
            <Frame>
                <Switch>
                    {
                        adminRoutes.map(route => {
                            return (
                                // route.children
                                // ?
                                // route.children.map(element => {
                                //     return (
                                //         <Route 
                                //             key={element.pathname} 
                                //             path={element.pathname} 
                                //             exact={element.exact}
                                //             render={(routerProps) => {
                                //                 return <element.component {...routerProps}/>
                                //             }}
                                //         />
                                //     )
                                // })
                                // :
                                <Route 
                                    key={route.pathname} 
                                    path={route.pathname} 
                                    exact={route.exact}
                                    render={(routerProps) => {
                                        return route.children
                                            ?
                                            <Switch>
                                                {
                                                    route.children.map(item => {
                                                        return <item.component 
                                                                    {...routerProps} 
                                                                    exact={item.exact} 
                                                                    key={item.pathname} 
                                                                    path={item.pathname}
                                                                />
                                                    })
                                                }                        
                                            </Switch>
                                            :
                                            <route.component />
                                    }}
                                />
                                // <Redirect from="/admin/route.pathname" to="/admin/route.pathname/route.children[0].pathname"/>
                            )
                        })
                    }
                    <Redirect from="/admin" to="/admin/home"/>
                    <Redirect to="/404"/>
                </Switch>
            </Frame>
        )
    }
}
