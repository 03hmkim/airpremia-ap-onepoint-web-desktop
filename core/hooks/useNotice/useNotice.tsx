import {
    handleNoticesLoad,
    handleNoticeContentLoad,
} from '../../stores/models/notice'
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../stores';

export default () => {
    const dispatch = useDispatch();
    const {
        notice: noticeStore,
    } = useSelector((state: RootStore) => state);

    const onGetNotices = () => {
        const payload = {
            page: 0,
            size: 100,
            sort: "DESC",
            title: "",
        };
        dispatch(handleNoticesLoad.request(payload));
    }

    const onGetNoticeContents = (
        noticeId: string,
    ) => {
        const payload = {
            noticeId: noticeId
        }

        console.log("payload : ", payload);
        dispatch(handleNoticeContentLoad.request(payload));
    }

    return {
        noticeStore,
        onGetNotices,
        onGetNoticeContents,
    }
}