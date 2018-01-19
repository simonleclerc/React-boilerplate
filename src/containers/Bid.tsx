import Bid from "../components/Bid";
import * as actions from "../actions/";
import {StoreState} from "../types/index";
import {connect, Dispatch} from "react-redux";

export function mapStateToProps({currentBid, walletAmount}: StoreState) {
    return {
        currentBid,
        walletAmount
    };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.BidAction>) {
    return {
        onIncrement: () => dispatch(actions.incrementBid()),
        onDecrement: () => dispatch(actions.decrementBid())
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Bid);