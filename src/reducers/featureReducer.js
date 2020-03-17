// import actions
import { 
    ADD_FEATURE, 
    REMOVE_FEATURE
} from '../actions/featureActions';

// export initial state
export const initialState = {
    additionalPrice: 0,
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
    },
    additionalFeatures: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
    ]
}

// export reducer
export const featureReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FEATURE: 
            const newCarFeature = state.additionalFeatures.find(feature => {
                return feature.id === action.payload
            });
            const increasedPrice = state.additionalPrice +  newCarFeature.price;
            return {
                ...state,
                car: {...state.car,
                    features: [...state.car.features, newCarFeature]
                },
                additionalPrice: increasedPrice
            }
        case REMOVE_FEATURE:
            const updatedCarFeatures = state.car.features.filter(feature => {
                if (feature.id !== action.payload) {
                    return {...feature}
                }
            })
            const removedFeature = state.car.features.find(feature => {
                return feature.id === action.payload
            });
            const reducedPrice = state.additionalPrice - removedFeature.price;
            return {
                ...state,
                car: {...state.car,
                    features: updatedCarFeatures
                },
                additionalPrice: reducedPrice
            }
        default: 
            return {...state}
    }
}