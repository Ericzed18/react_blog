import {Avatar,Divider} from 'antd'
import '../static/style/components/author.css'

const Author = () => {
    return (
        <div className="author-div comm-box">
            <div></div>
            <div><Avatar size={100} src="http://image.jesseyan.cn/8c3785ad459bc5f744ac0efbec83d1a8"/></div>
            <div className="author-introduction">
                <div className="author-name">盐假洁</div>
                <div>2016级金信保研党</div>
                <div>SWUFE为数不多的“菜鸟”程序猿</div>
                <Divider>社交账号</Divider>
                <div><Avatar size={28} icon="github" className="account" /><a href="https://github.com/Ericzed18">&nbsp;Ericzed18</a></div>
                <div><Avatar size={28} icon="qq" className="account"/>&nbsp;1056680171</div>

            </div>
        </div>
    )
}

export default Author