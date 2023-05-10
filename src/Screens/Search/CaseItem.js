import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
const CaseItem = (props) => {
    return (
        <View style={{ flex: 1, padding: 10, width: '100%', backgroundColor: '#fff', marginTop: 10 }} >
            <View style={{ flexDirection: 'column', justifyContent: 'space-around' }}>
                <View>
                    <Text>ORG Name: {props.orgDetails.organizationName}</Text>
                    <Text>ORG Email: {props.orgDetails.organizationEmail}</Text>
                </View>

                <View>
                    <Text>Pat name: {props.orgDetails.pat_name}</Text>
                    <Text>Pat Phone: {props.orgDetails.pat_phoneno}</Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                <Text>Case Status: {props.orgDetails.caseStatus}</Text>
                <Text>Case Decision: {props.orgDetails.casedecision}</Text>
            </View>

        </View >
    );
}

export default CaseItem;