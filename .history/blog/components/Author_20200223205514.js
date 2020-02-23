import {Avatar,Divider} from 'antd'
import '../static/style/components/author.css'

const Author = () => {
    return (
        <div className="author-div comm-box">
            <div><Avatar size={100} src="http://image.jesseyan.cn/8c3785ad459bc5f744ac0efbec83d1a8"/></div>
            <div className="author-introduction">
                目前已保研至xxxx大学，因为想用markdown写文章，脱离现有的平台，所以狠下心来做网站~
                <Divider>社交账号</Divider>
                <div><Avatar size={28} icon="github" className="account" /><a href="https://github.com/Ericzed18">https://github.com/Ericzed18</a></div>
                <div><Avatar size={28} icon="qq" className="account"/>QQ:1056680171</div>

            </div>
        </div>
    )
}

export default Author