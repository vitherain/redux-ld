import { connect } from 'react-redux'
import { getSum } from '../redux/actions/index'
import Sum from '../components/Sum'

const SumContainer = connect(
    (state, ownProps) => ( {
        sum: state.sum
    }),
    {onSum: (a,b) => getSum(a, b)}
)(Sum)

export default SumContainer