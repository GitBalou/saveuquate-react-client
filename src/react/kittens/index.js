import React from 'react';
import {connect} from 'react-redux';
import kittens from '../../logic/kittens';

class Kittens extends React.Component {

    componentDidMount(){
        this.props.fetchData();
    }


    render() {

        if(this.props.list.length == 0) {
            return <p>Pas de chaton!</p>;
        }

        const lines = this.props.list.map( (data,i )=> (
            <tr key={i}>
                <td>
                    {data.name}
                </td>
                <td>
                    {data.color}
                </td>
                <td>
                    {data.flaw}
                </td>
                <td>
                    {data.foodBrand}
                </td>
            </tr>
        ));

        return (
          <table>
              <thead>
                <tr>
                    <td>
                        Nom
                    </td>
                    <td>
                        Couleur
                    </td>
                    <td>
                        Défaut
                    </td>
                    <td>
                        Croquettes
                    </td>
                </tr>
              </thead>
              <tbody>
                {lines}
              </tbody>
          </table>
        );
    }
}

// connect data from store
const mapStateToProps = state => {
    return {
        list: state.kittens.list,
    };
};

// connect dispatch to store
const mapDispatchToProps = dispatch => {
    return {
        fetchData: () => dispatch(kittens.fetchData()),
    };
};

// connection du composant à redux
export default connect(mapStateToProps, mapDispatchToProps)(Kittens);