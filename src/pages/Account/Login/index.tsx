import Loading from "@/components/Loading";
import { login, user } from "@/services/account";
import { ProCard } from "@ant-design/pro-components";
import ProForm, { ProFormText } from "@ant-design/pro-form";
import { history } from "@umijs/max";
import { Card, Layout } from "antd";
import { useEffect, useState } from "react";
import './index.css';

const { Password } = ProFormText;
const { Content } = Layout;

const Login: React.FC = () => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        user().then(response => {
            if (response) {
                history.push('/home')
            }
        }).finally(() => setLoading(false))
    }, [])

    const onFinish = async (values: any) => {
        login(values).then(response => {
            if (response.succeeded) {
                localStorage.setItem('def_token', response.token || '');
                history.push('/home')
            }
        })
    }
    return (
        <Layout>
            {
                loading ? (
                    <Content>
                        <Loading />
                    </Content>
                ) : (
                    <Content className="h-screen flex items-center justify-center"
                        style={{ background: 'url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNDQwJyBoZWlnaHQ9JzU0MCcgcHJlc2VydmVBc3BlY3RSYXRpbz0nbm9uZSc+PGcgbWFzaz0ndXJsKCZxdW90OyNTdmdqc01hc2sxMTkyJnF1b3Q7KScgZmlsbD0nbm9uZSc+PHBhdGggZmlsbD0nIzBlMmE0NycgZD0nTTAgMGgyNDQwdjU0MEgweicvPjxwYXRoIGNsaXAtcGF0aD0ndXJsKCZxdW90OyNTdmdqc0NsaXBQYXRoMTE5MyZxdW90OyknIGZpbGw9J3VybCgjU3ZnanNQYXR0ZXJuMTE5NCknIHRyYW5zZm9ybT0ncm90YXRlKDExNS40MyAzNTcuNzggMjQ4LjQzKScgZD0nTTE3Ny45NiA2OC42MUg1MzcuNnYzNTkuNjRIMTc3Ljk2eicvPjxjaXJjbGUgcj0nNDUnIGN4PScxMDY4LjMzJyBjeT0nNDUxLjYyJyBzdHJva2U9J3JnYmEoMzcsIDg2LCAxMzcsIDEpJyBzdHJva2Utd2lkdGg9JzEuODInIHN0cm9rZS1kYXNoYXJyYXk9JzMsIDInLz48Y2lyY2xlIHI9JzYyLjMnIGN4PScxNTA3Ljg5JyBjeT0nMTg4JyBmaWxsPSdyZ2JhKDM3LCA4NiwgMTM3LCAxKScvPjxwYXRoIGQ9J000MjguMDggMzY5Ljk4YTUuNiA1LjYgMCAxMC0xMC40OC0zLjk2IDUuNiA1LjYgMCAxMDEwLjQ4IDMuOTZ6bS0xNC45Ny01LjY2YTUuNiA1LjYgMCAxMC0xMC40Ny0zLjk3IDUuNiA1LjYgMCAxMDEwLjQ3IDMuOTd6bS0xNC45Ni01LjY3YTUuNiA1LjYgMCAxMC0xMC40OC0zLjk2IDUuNiA1LjYgMCAxMDEwLjQ4IDMuOTZ6bS0xNC45Ni01LjY2YTUuNiA1LjYgMCAxMC0xMC40OC0zLjk2IDUuNiA1LjYgMCAxMDEwLjQ4IDMuOTZ6bTgwLjQ4IDEzLjM1YTUuNiA1LjYgMCAxMC0xMC40OC0zLjk2IDUuNiA1LjYgMCAxMDEwLjQ4IDMuOTZ6bS0xNC45Ni01LjY2YTUuNiA1LjYgMCAxMC0xMC40OC0zLjk2IDUuNiA1LjYgMCAxMDEwLjQ4IDMuOTZ6bS0xNC45Ny01LjY2YTUuNiA1LjYgMCAxMC0xMC40Ny0zLjk3IDUuNiA1LjYgMCAxMDEwLjQ3IDMuOTd6bS0xNC45Ni01LjY3YTUuNiA1LjYgMCAxMC0xMC40OC0zLjk2IDUuNiA1LjYgMCAxMDEwLjQ4IDMuOTZ6JyBmaWxsPSdyZ2JhKDM3LCA4NiwgMTM3LCAxKScvPjxwYXRoIGNsaXAtcGF0aD0ndXJsKCZxdW90OyNTdmdqc0NsaXBQYXRoMTE5NSZxdW90OyknIGZpbGw9J3VybCgjU3ZnanNQYXR0ZXJuMTE5NiknIHRyYW5zZm9ybT0ncm90YXRlKDc1LjY2IDE0NDkuMjcgMTY1LjMyKScgZD0nTTEzMjYuMjcgNDIuMzJoMjQ2djI0NmgtMjQ2eicvPjxwYXRoIGQ9J001MTMuMzQgMTY4Ljg4YTUuNiA1LjYgMCAxMDcuNjgtOC4xNSA1LjYgNS42IDAgMTAtNy42OCA4LjE1em0xMC45Ny0xMS42NWE1LjYgNS42IDAgMTA3LjY4LTguMTUgNS42IDUuNiAwIDEwLTcuNjggOC4xNXptMTAuOTctMTEuNjVhNS42IDUuNiAwIDEwNy42Ny04LjE1IDUuNiA1LjYgMCAxMC03LjY3IDguMTV6bTEwLjk2LTExLjY1YTUuNiA1LjYgMCAxMDcuNjgtOC4xNSA1LjYgNS42IDAgMTAtNy42OCA4LjE1em0tNDMuMTggNjkuMjJhNS42IDUuNiAwIDEwNy42Ny04LjE1IDUuNiA1LjYgMCAxMC03LjY3IDguMTV6bTEwLjk3LTExLjY1YTUuNiA1LjYgMCAxMDcuNjctOC4xNSA1LjYgNS42IDAgMTAtNy42NyA4LjE1em0xMC45Ni0xMS42NWE1LjYgNS42IDAgMTA3LjY4LTguMTUgNS42IDUuNiAwIDEwLTcuNjggOC4xNXptMTAuOTctMTEuNjVhNS42IDUuNiAwIDEwNy42OC04LjE1IDUuNiA1LjYgMCAxMC03LjY4IDguMTV6JyBmaWxsPSdyZ2JhKDM3LCA4NiwgMTM3LCAxKScvPjxwYXRoIGQ9J00xNTE4LjkyIDQzNy41NGw1NC4yMyAxNS4yNy00OC4wMjcgMTMuMjc3eicgc3Ryb2tlPSdyZ2JhKDM3LCA4NiwgMTM3LCAxKScgc3Ryb2tlLXdpZHRoPScxLjEzJy8+PHBhdGggY2xpcC1wYXRoPSd1cmwoJnF1b3Q7I1N2Z2pzQ2xpcFBhdGgxMTk3JnF1b3Q7KScgZmlsbD0ndXJsKCNTdmdqc1BhdHRlcm4xMTk4KScgdHJhbnNmb3JtPSdyb3RhdGUoMzE4LjMyIDEzNjEuMDggNTAyLjMyKScgZD0nTTEyOTMuOTggNDM1LjIyaDEzNC4ydjEzNC4yaC0xMzQuMnonLz48cGF0aCBkPSdNMTA1OC4yIDQyMS4zOWwtMTE1LjY0IDU5LjggMTE2LjUyMSAyOC44MDF6JyBzdHJva2U9J3JnYmEoMzcsIDg2LCAxMzcsIDEpJyBzdHJva2Utd2lkdGg9JzEuNTMnLz48cGF0aCBkPSdNMjA2My4yMiAxMjguMTZsMS40NC01OC45OS0yNC4xNzQgNi4wNDF6JyBmaWxsPSdyZ2JhKDM3LCA4NiwgMTM3LCAxKScvPjxwYXRoIGQ9J005MTEuMTUgMjA1LjgybC0yLjQ2IDEyLjU3LTEyLjguMzYtMi40NSAxMi41Ny0xMi44LjM3LTIuNDYgMTIuNTctMTIuOC4zNm00MC42LTQ0LjlsLTIuNDYgMTIuNTctMTIuOC4zNi0yLjQ1IDEyLjU3LTEyLjgxLjM2LTIuNDUgMTIuNTctMTIuOC4zN200MC41OS00NC45bC0yLjQ1IDEyLjU2LTEyLjguMzctMi40NiAxMi41Ny0xMi44LjM2LTIuNDUgMTIuNTctMTIuOC4zNicgc3Ryb2tlPSdyZ2JhKDM3LCA4NiwgMTM3LCAxKScgc3Ryb2tlLXdpZHRoPScxLjU5JyBzdHJva2UtZGFzaGFycmF5PSczLCAyJy8+PHBhdGggY2xpcC1wYXRoPSd1cmwoJnF1b3Q7I1N2Z2pzQ2xpcFBhdGgxMTk5JnF1b3Q7KScgZmlsbD0ndXJsKCNTdmdqc1BhdHRlcm4xMjAwKScgdHJhbnNmb3JtPSdyb3RhdGUoMTk1Ljk4IDc2OS44NiAyMS42OCknIGQ9J003MzguMzYtOS44Mmg2M3Y2M2gtNjN6Jy8+PHBhdGggZD0nTTIzNTAuMDggNDE5LjE5bDYxLjk1IDUuOC4xMi0zMy45OTV6JyBzdHJva2U9J3JnYmEoMzcsIDg2LCAxMzcsIDEpJyBzdHJva2Utd2lkdGg9JzIuMDMnIHN0cm9rZS1kYXNoYXJyYXk9JzIsIDInLz48cGF0aCBjbGlwLXBhdGg9J3VybCgmcXVvdDsjU3ZnanNDbGlwUGF0aDEyMDEmcXVvdDspJyBmaWxsPSd1cmwoI1N2Z2pzUGF0dGVybjEyMDIpJyB0cmFuc2Zvcm09J3JvdGF0ZSgxNjAuOSAyMzc1LjYxIDExOS4yNiknIGQ9J00yMzE1LjYxIDU5LjI2aDEyMHYxMjBoLTEyMHonLz48cGF0aCBjbGlwLXBhdGg9J3VybCgmcXVvdDsjU3ZnanNDbGlwUGF0aDEyMDMmcXVvdDspJyBmaWxsPSd1cmwoI1N2Z2pzUGF0dGVybjEyMDQpJyB0cmFuc2Zvcm09J3JvdGF0ZSgxODMuOTYgMTkzOS45NCAxNDguNzIpJyBkPSdNMTg5Ny45NCAxMDYuNzJoODR2ODRoLTg0eicvPjxwYXRoIGNsaXAtcGF0aD0ndXJsKCZxdW90OyNTdmdqc0NsaXBQYXRoMTIwNSZxdW90OyknIGZpbGw9J3VybCgjU3ZnanNQYXR0ZXJuMTIwNiknIHRyYW5zZm9ybT0ncm90YXRlKDI4OC41NiA3NjQuNTcgNzcuMDUpJyBkPSdNNzM0LjU3IDQ3LjA1aDYwdjYwaC02MHonLz48Y2lyY2xlIHI9JzQ1JyBjeD0nMjIzLjg4JyBjeT0nMjY3LjIzJyBmaWxsPSdyZ2JhKDM3LCA4NiwgMTM3LCAxKScvPjxwYXRoIGQ9J00yMDk2LjQ3IDc1Ljg0YTUuNiA1LjYgMCAxMDcuMTggOC41OSA1LjYgNS42IDAgMTAtNy4xOC04LjU5em0xMC4yNiAxMi4yN2E1LjYgNS42IDAgMTA3LjE5IDguNTkgNS42IDUuNiAwIDEwLTcuMTktOC41OXptMTAuMjcgMTIuMjdhNS42IDUuNiAwIDEwNy4xOSA4LjU5IDUuNiA1LjYgMCAxMC03LjE5LTguNTl6bTEwLjI3IDEyLjI3YTUuNiA1LjYgMCAxMDcuMTkgOC41OSA1LjYgNS42IDAgMTAtNy4xOS04LjU5eicgc3Ryb2tlPSdyZ2JhKDM3LCA4NiwgMTM3LCAxKScgc3Ryb2tlLXdpZHRoPScxLjIzJy8+PHBhdGggZD0nTTIzNDYuNjkgMzI4LjA2bC0xNDUuMDYtMTQuMjMtMy42NzggODMuMzIzeicgZmlsbD0ncmdiYSgzNywgODYsIDEzNywgMSknLz48cGF0aCBkPSdNMTc5Ni45MiAyNDMuNzFsMi4zNCAxMi41OS0xMS43NyA1LjA1IDIuMzUgMTIuNTktMTEuNzcgNS4wNSAyLjM0IDEyLjU5LTExLjc3IDUuMDRtMjEuMjItNTYuNjhsMi4zNSAxMi41OS0xMS43NyA1LjA1IDIuMzQgMTIuNTktMTEuNzcgNS4wNCAyLjM0IDEyLjU5LTExLjc3IDUuMDUnIHN0cm9rZT0ncmdiYSgzNywgODYsIDEzNywgMSknIHN0cm9rZS13aWR0aD0nMi40Nycgc3Ryb2tlLWRhc2hhcnJheT0nNCwgNCcvPjxjaXJjbGUgcj0nODcuNDk4JyBjeD0nMTY1My4xNScgY3k9JzI4MC41Micgc3Ryb2tlPSdyZ2JhKDM3LCA4NiwgMTM3LCAxKScgc3Ryb2tlLXdpZHRoPScxLjknIHN0cm9rZS1kYXNoYXJyYXk9JzQsIDQnLz48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPSdTdmdqc0NsaXBQYXRoMTE5Myc+PGNpcmNsZSByPSc4OS45MScgY3g9JzM1Ny43OCcgY3k9JzI0OC40MycvPjwvY2xpcFBhdGg+PGNsaXBQYXRoIGlkPSdTdmdqc0NsaXBQYXRoMTE5NSc+PGNpcmNsZSByPSc2MS41JyBjeD0nMTQ0OS4yNycgY3k9JzE2NS4zMicvPjwvY2xpcFBhdGg+PGNsaXBQYXRoIGlkPSdTdmdqc0NsaXBQYXRoMTE5Nyc+PGNpcmNsZSByPSczMy41NScgY3g9JzEzNjEuMDgnIGN5PSc1MDIuMzInLz48L2NsaXBQYXRoPjxjbGlwUGF0aCBpZD0nU3ZnanNDbGlwUGF0aDExOTknPjxjaXJjbGUgcj0nMTUuNzUnIGN4PSc3NjkuODYnIGN5PScyMS42OCcvPjwvY2xpcFBhdGg+PGNsaXBQYXRoIGlkPSdTdmdqc0NsaXBQYXRoMTIwMSc+PGNpcmNsZSByPSczMCcgY3g9JzIzNzUuNjEnIGN5PScxMTkuMjYnLz48L2NsaXBQYXRoPjxjbGlwUGF0aCBpZD0nU3ZnanNDbGlwUGF0aDEyMDMnPjxjaXJjbGUgcj0nMjEnIGN4PScxOTM5Ljk0JyBjeT0nMTQ4LjcyJy8+PC9jbGlwUGF0aD48Y2xpcFBhdGggaWQ9J1N2Z2pzQ2xpcFBhdGgxMjA1Jz48Y2lyY2xlIHI9JzE1JyBjeD0nNzY0LjU3JyBjeT0nNzcuMDUnLz48L2NsaXBQYXRoPjxwYXR0ZXJuIHg9JzAnIHk9JzAnIHdpZHRoPSc2LjY2JyBoZWlnaHQ9JzYuNjYnIHBhdHRlcm5Vbml0cz0ndXNlclNwYWNlT25Vc2UnIGlkPSdTdmdqc1BhdHRlcm4xMTk0Jz48cGF0aCBkPSdNMCA2LjY2TDMuMzMgMGwzLjMzIDYuNjYnIHN0cm9rZT0ncmdiYSgzNywgODYsIDEzNywgMSknIGZpbGw9J25vbmUnLz48L3BhdHRlcm4+PHBhdHRlcm4geD0nMCcgeT0nMCcgd2lkdGg9JzguMicgaGVpZ2h0PSc4LjInIHBhdHRlcm5Vbml0cz0ndXNlclNwYWNlT25Vc2UnIGlkPSdTdmdqc1BhdHRlcm4xMTk2Jz48cGF0aCBkPSdNNC4xIDF2Ni4yTTEgNC4xaDYuMicgc3Ryb2tlPSdyZ2JhKDM3LCA4NiwgMTM3LCAxKScgZmlsbD0nbm9uZScgc3Ryb2tlLXdpZHRoPScxLjQzJy8+PC9wYXR0ZXJuPjxwYXR0ZXJuIHg9JzAnIHk9JzAnIHdpZHRoPScxMzQuMicgaGVpZ2h0PScxMy40MicgcGF0dGVyblVuaXRzPSd1c2VyU3BhY2VPblVzZScgaWQ9J1N2Z2pzUGF0dGVybjExOTgnPjxwYXRoIGZpbGw9J3JnYmEoMzcsIDg2LCAxMzcsIDEpJyBkPSdNMCAwaDEzNC4ydjYuNzFIMHonLz48cGF0aCBmaWxsPSdyZ2JhKDAsIDAsIDAsIDApJyBkPSdNMCA2LjcxaDEzNC4ydjYuNzFIMHonLz48L3BhdHRlcm4+PHBhdHRlcm4geD0nMCcgeT0nMCcgd2lkdGg9JzYuMycgaGVpZ2h0PSc2LjMnIHBhdHRlcm5Vbml0cz0ndXNlclNwYWNlT25Vc2UnIGlkPSdTdmdqc1BhdHRlcm4xMjAwJz48cGF0aCBkPSdNMy4xNSAxdjQuM00xIDMuMTVoNC4zJyBzdHJva2U9J3JnYmEoMzcsIDg2LCAxMzcsIDEpJyBmaWxsPSdub25lJy8+PC9wYXR0ZXJuPjxwYXR0ZXJuIHg9JzAnIHk9JzAnIHdpZHRoPScxMjAnIGhlaWdodD0nNicgcGF0dGVyblVuaXRzPSd1c2VyU3BhY2VPblVzZScgaWQ9J1N2Z2pzUGF0dGVybjEyMDInPjxwYXRoIGZpbGw9J3JnYmEoMzcsIDg2LCAxMzcsIDEpJyBkPSdNMCAwaDEyMHYzSDB6Jy8+PHBhdGggZmlsbD0ncmdiYSgwLCAwLCAwLCAwKScgZD0nTTAgM2gxMjB2M0gweicvPjwvcGF0dGVybj48cGF0dGVybiB4PScwJyB5PScwJyB3aWR0aD0nNicgaGVpZ2h0PSc2JyBwYXR0ZXJuVW5pdHM9J3VzZXJTcGFjZU9uVXNlJyBpZD0nU3ZnanNQYXR0ZXJuMTIwNCc+PHBhdGggZD0nTTAgNmwzLTYgMyA2JyBzdHJva2U9J3JnYmEoMzcsIDg2LCAxMzcsIDEpJyBmaWxsPSdub25lJy8+PC9wYXR0ZXJuPjxwYXR0ZXJuIHg9JzAnIHk9JzAnIHdpZHRoPSc2JyBoZWlnaHQ9JzYnIHBhdHRlcm5Vbml0cz0ndXNlclNwYWNlT25Vc2UnIGlkPSdTdmdqc1BhdHRlcm4xMjA2Jz48cGF0aCBkPSdNMCA2bDMtNiAzIDYnIHN0cm9rZT0ncmdiYSgzNywgODYsIDEzNywgMSknIGZpbGw9J25vbmUnLz48L3BhdHRlcm4+PG1hc2sgaWQ9J1N2Z2pzTWFzazExOTInPjxwYXRoIGZpbGw9JyNmZmYnIGQ9J00wIDBoMjQ0MHY1NDBIMHonLz48L21hc2s+PC9kZWZzPjwvc3ZnPg==)' }}>
                        <ProCard title="Login" className="login-wrapper" >
                            <ProForm submitter={{
                                searchConfig: {
                                    submitText: 'Login',
                                    resetText: 'Reset'
                                }
                            }}
                                onFinish={onFinish}
                                style={{
                                    maxWidth: 500
                                }}>
                                <ProFormText label="Email" name="username"
                                    rules={[{ required: true, message: 'Please input your email!', type: 'email' }]}
                                />
                                <Password label="Password" name='password'
                                    rules={[{ required: true, message: 'Please input your password!' }]}
                                />
                            </ProForm>
                            <div className="copy-right">© 2022 <a href="https://defzone.net">DefZone</a> Inc.</div>
                        </ProCard>
                    </Content>
                )
            }
        </Layout>
    )
}

export default Login