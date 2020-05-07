import { StyleSheet } from 'react-native';

// import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 8 /*Constants.statusBarHeight*/,
    },

    containerMenu: {
        justifyContent: "flex-end",
        alignItems: "flex-end",
        marginTop: 15,
    },

    containerOverlay: {
        position: "absolute",
        top: 16,
        right: 8,

        backgroundColor: "#FFF"
    },

    containerOverlaySobre: {
        width: '70%',
        height: '50%',

        alignItems: 'center',
        justifyContent: 'space-evenly',

        backgroundColor: "#8E2DE2",
        borderRadius: 15,
    },

    containerOverlaySobreText: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: "400",
    },

    containerOverlayMenu: {
        flexDirection:"row",
        padding: 8,
        alignItems: "center",
    },

    containerOverlayMenuText: {
        fontSize: 18,
        fontWeight: "600",
        marginLeft: 16,
    },

    containerLogo: {
        width: "100%",
        height: "25%",
        justifyContent: "center",
        alignItems: "center",
    },

    containerBoards: {
        width: "100%",
        height: 65,
        marginBottom: 16,
        borderRadius: 16,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        justifyContent: "center",
        alignItems: "center",
    },

    textBoards: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: "700",
        textAlign: "center",
    },
});