import React from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
} from 'react-native';

const DATA = [
    {
        id: '1',
        title: 'First Item',
    },
    {
        id: '2',
        title: 'Second Item',
    },
    {
        id: '3',
        title: 'Third Item',
    },
];
type ItemProps = { title: string };
const Item = ({ title }: ItemProps) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);
const List = () => {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList data={DATA} keyExtractor={(item) => item?.id} renderItem={({ item }) => {
                return <>
                    <Text onPress={()=>{
                    }} style={{ backgroundColor: "green", color: "white", padding: 5, marginVertical: 2, textAlign: 'center', borderRadius: 5 }}>{item?.title}</Text>
                </>
            }} />
            {/* <FlatList
                data={DATA}
                renderItem={({ item }) => <Item title={item.title} />}
                keyExtractor={item => item.id}
            /> */}
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});
export default List;