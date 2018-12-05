# App

To start the dev server:

  * Install dependencies with `yarn install`
  * Start server with `yarn start` 

Now you can visit [`localhost:3000`](http://localhost:3000) from your browser.

### Project folder structure

- ***Elements** - UI kit for application containing all the buttons, inputs, text styles etc*

- ***Layouts*** - Layouts containing common elements for different user states e.g. authorized non authorized layout

- ***Pages** -* Top level page components


- ***Redux** -* Folder containing modules for state each module contain:
    - ***ModuleName** -  Folder named by reducer e.g User*
        - ***index.js*** - entry file where all exports take place
        - **UserReducer.js** - reducer with **redux-actions** & **Immutable.js**
            ```javascript
            import { handleActions, createAction } from 'redux-actions'
            import Immutable from 'seamless-immutable'
            
            // --- 
            // CONSTANTS
            // ---
            export const SET_ACTIVE_ORDER = 'trade/SET_ACTIVE_ORDER'
            
            // ---
            // ACTION CREATORS
            // ---
            
            export const setActiveOrder = createAction(SET_ACTIVE_ORDER)
            
            // ---
            // INITIAL STATE
            // ---
            
            const initialState = Immutable({
              activeOrder: null
            })
            
            // ---
            // REDUCER
            // ---
            
            export default handleActions(
              {
                [SET_ACTIVE_ORDER]: (state, action) =>
                  Immutable.merge(state, { activeOrder: action.payload })
              },
              initialState
            )
            ```

        **This structure is strict**

        - ***UserSelectors.js** - selectors for redux using all mapStateToProps goes with selectors*

        [reactjs/reselect](https://github.com/reactjs/reselect)

        - ***UserSagas.js -*** sagas for sideeffects

        [redux-saga/redux-saga](https://github.com/redux-saga/redux-saga)

- ***modules -*** Folder containing all the reusable container and components each folder has it's own module name e.g. User
    - ***User -*** folder containing user's related components and containers, which are not screens
        - ***components*** - folder containing all components
        - ***containers*** - folder containing all the containers
- ***Utils*** - utils folder

## Easy to follow practices:

- Components do not have mapState functions
- You can't add component to the Elements folder without a subfolder
    - Elements → Lists → DefaultList.js (GOOD)
    - Elements → SomeRandomComponent.js (BAD)
- Containers do not have template, only import from component file
- Each component extends from **PureComponent**
- Unit tests are placed in the same folder as tested file
- PropTypes are required for each component
