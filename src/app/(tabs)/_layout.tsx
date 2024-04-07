import { Tabs } from 'expo-router'
import * as icons from '@expo/vector-icons'

export default function Layout(){
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
        }}>
            <Tabs.Screen 
                name="index" 
                options={{
                    tabBarIcon: ({size, color}) => <icons.Foundation name="home" size={size} color={color}/>,
                }}
                />
            <Tabs.Screen 
                name="search"                
                options={{
                    tabBarIcon: ({size, color}) => <icons.Ionicons name="search" size={size} color={color}/>,
                }}
                />
            <Tabs.Screen 
                name="messages"                
                options={{
                        tabBarIcon: ({size, color}) => <icons.Ionicons name="chatbubble-ellipses" size={size} color={color}/>,
                    }}
                    />
            <Tabs.Screen 
                name="profile"
        
                />
        </Tabs>
    )
}