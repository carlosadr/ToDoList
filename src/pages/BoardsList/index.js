import React, { useState } from 'react';

import { 
    StatusBar, 
    Modal,
    View, 
    Text, 
    Image, 
    FlatList, 
    TouchableOpacity,
} from 'react-native';

import { Feather } from '@expo/vector-icons';
import { Overlay } from 'react-native-elements'
import { TextInput } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

import stylesSheet from './stylesSheet'
import logoImg from '../../assets/img/logo.png'

export default function BoardsList () {
    const colorPrimary = '#8E2DE2';
    const colorSecundary = '#4A00E0';

    const [visible, setVisible] = useState(false);
    const [visibleSobre, setVisibleSobre] = useState(false);
    
    const toggleOverlay = () => {
        setVisible(!visible);
    };
    const toggleOverlaySobre = () => {
        setVisible(!visible);
        setVisibleSobre(!visibleSobre);
    };
    
            
    return(
        <LinearGradient
            colors={[colorPrimary, colorSecundary]}
            style={ stylesSheet.container }
            >
            <StatusBar backgroundColor={colorPrimary} colors='#FFF' />

            <View>
                <TouchableOpacity onPress={ toggleOverlay } style={stylesSheet.containerMenu}>
                    <Feather name='menu' size={25} color='#FFF' />
                </TouchableOpacity>

                <Overlay 
                    isVisible={visible}
                    overlayStyle={stylesSheet.containerOverlay}
                    onBackdropPress={ toggleOverlay }
                    ModalComponent={Modal}
                    animationType="fade"
                >
                    
                    <TouchableOpacity
                        onPress={ toggleOverlay }
                        style={stylesSheet.containerOverlayMenu}
                    >
                        <Feather name="log-in" size={20}/>
                        <Text style={stylesSheet.containerOverlayMenuText}>
                            Login
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={ toggleOverlaySobre }
                        style={stylesSheet.containerOverlayMenu}
                        >
                        <Feather name="info" size={20}/>
                        <Text style={stylesSheet.containerOverlayMenuText}>
                            Sobre
                        </Text>
                    </TouchableOpacity>
                </Overlay>
                        
                <Overlay
                    isVisible={visibleSobre}
                    onBackdropPress={ toggleOverlaySobre }
                    overlayStyle={stylesSheet.containerOverlaySobre}
                    ModalComponent={Modal}
                    animationType="fade"
                >

                    <Image source={logoImg} size={ 20 } />

                    <Text style={stylesSheet.containerOverlaySobreText}>
                        Todos direitos reservados à Carlos André Rebouças
                    </Text>
                    <Text style={stylesSheet.containerOverlaySobreText}>
                        Versão 1.0v
                    </Text>
                </Overlay>
            </View>

            <View style={stylesSheet.containerLogo}>
                <Image source={logoImg} size={40} />
            </View>

            <FlatList
                data={() => {}}
                style={stylesSheet.containerFlatList}
                keyExtractor={() => {}}
                showsVerticalScrollIndicator={false}
                onEndReached={() => {}}
                onEndReachedThreshold={0.2}
                renderItem={() => {}}
            >
                <TouchableOpacity style={ stylesSheet.containerBoards }>
                    <Text style={ stylesSheet.textBoards } > Task </Text>
                </TouchableOpacity>
            </FlatList>

            <TouchableOpacity 
                onPress={() => {} } 
                style={ stylesSheet.containerBoards }>
                <TextInput style={ stylesSheet.textBoards } placeholder="+ Adicionar" ></TextInput>
            </TouchableOpacity>
            
        </LinearGradient>
    );
}