import styled from 'styled-components'

const MainSide=(props)=>{
    return(
        <Container>
            <ShareBox>
                Share
            
            <div>
                <img src="/images/user.svg" />
                <button>Start a Post</button>
            </div>
            <div>
                <button>
                    <img src="/images/photo2.svg" />
                    <span>Photo</span>
                </button>

                <button>
                    <img  src="/images/video.svg"/>
                    <span>Video</span>
                </button>

                <button>
                    <img  src="/images/event.svg"/>
                    <span>Event</span>
                </button>

                <button>
                    <img  src="images/articles.svg"/>
                    <span>Article</span>
                </button>
            </div>
            </ShareBox>
            <div>
                <Article>
                    <SharedActor>
                        <a>
                            <img src="/images/user.svg" />
                            <div>
                                <span>Title</span>
                                <span>Info</span>
                                <span>Date</span>
                            </div>
                        </a>
                        <button>
                            <img src="/images/ellipsis.svg" />
                        </button>
                    </SharedActor>
                    <Description>
                    Description
                    </Description>
                    <SharedImage>
                        <a>
                            <img src="/images/sharedimage.jpg" />
                        </a>
                    </SharedImage>
                    <SocialCount>
                        <li>
                            <button>
                                <img src="https://static-exp1.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt" />
                                <img src="https://static-exp1.licdn.com/sc/h/b1dl5jk88euc7e9ri50xy5qo8" />
                                <img src="https://static-exp1.licdn.com/sc/h/cpho5fghnpme8epox8rdcds22" />
                                <span>75</span>
                            </button>
                        </li>
                        <li>
                            <a>
                                1 comment
                            </a>
                        </li>
                    </SocialCount>
                    <SocialActions>
                    <button>
                        <img src="/images/like.svg" />
                        <span>Like</span>
                    </button>
                    <button>
                        <img src="/images/comment.svg" />
                        <span>Comment</span>
                    </button>
                    <button>
                        <img src="/images/send.svg" />
                        <span>Send</span>
                    </button>
                    <button>
                        <img src="/images/share.svg" />
                        <span>Share</span>
                    </button>
                    </SocialActions>
                </Article>
            </div>
        </Container>
    )
}

// ==================================(Styled-Components)================================>

const Container = styled.div`
grid-area: mainside;

`

const CommonCard = styled.div`
text-align: center;
overflow: hidden;
margin-bottom: 8px;
background-color:#fff;
border-radius:5px;
position: relative;
border: none;
box-shadow: 0 0 0 1px rgb(0 0 0 /15%),
            0 0 0 rgb(0 0 0 /20%);

`

const ShareBox =styled(CommonCard)`
display:flex;
flex-direction: column;
color: #958b7b;
margin: 0 0 8px;
background: white;
    div {
        button {
            outline: none;
            color: rgba(0,0,0,0.6);
            font-size:14px;
            line-height:1.5;
            min-height: 48px;
            background: transparent; 
            border: none;
            display: flex;
            align-items: center;
            font-weight: 600;
        }
        &:first-child {
            display: flex;
            align-items: center;
            padding: 8px 16px 0px 16px;
                img{
                    width: 48px;
                    border-radius: 50%;
                    margin-right: 8px;
                }
                button{
                    margin:4px 0px;
                    flex-grow: 1;
                    border-radius: 35px;
                    padding-left: 16px;
                    border: 1px solid rgba(0, 0, 0, 0.15);
                    background-color:white;
                    text-align:left;
                }
        }
        &:nth-child(2) {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            padding-bottom: 4px;
                button{
                    img{
                        margin: 0 4px 0 -2px;
                    }
                    span{
                        color:#70b5f9;
                    }
                }
        }
    }

`

const Article=styled(CommonCard)`
padding: 0;
margin: 0 0 8px;
overflow: visible;
`

const SharedActor = styled.div`
padding-right: 40px;
flex-wrap: nowrap;
padding: 12px 16px 0;
margin-bottom: 8px;
align-items: center;
display: flex;
    a{
        margin-right: 12px;
        flex-grow: 1;
        overflow: hidden;
        display: flex;
        text-decoration: none;

        img{
            width:48px;
            height:48px;
        }
        & > div{
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            flex-basis: 0;
            margin-left: 8px;
            overflow: hidden;
                span{
                    text-align: left;
                    &:first-child{
                        font-size:14px;
                        font-weight: 700;
                        color: rgba(0,0,0,1);
                    }
                    &:nth-child(n+1) {
                        font-size: 12px;
                        color: rgba(0,0,0,0.6);
                    }
                }
        }
    }
    button{
        position: absolute;
        right: 12px;
        top:0;
        background: transparent;
        border: none;
        outline: none;
    }
`


const Description=styled.div`
padding:0 16px;
overflow: hidden;
color: rgba(0,0,0,0.9);
font-size: 14px;
text-align: left;
`

const SharedImage=styled.div`
margin-top: 8px;
width: 100%;
display: block;
position: relative;
background-color: #f9fafb;
img{
    object-fit: contain;
    width: 100%;
    height: 100%;


}
`

const SocialCount =styled.ul`
line-height: 1.3;
display: flex;
align-items: flex-start;
overflow: auto;
margin: 0 16px;
padding: 8px 0px;
border-bottom: 1px solid #e9e5df;
list-style: none;
    li{
        margin-right: 5px;
        font-size: 12px;
        button{
            display: flex;

        }
    }
`

const SocialActions =styled.div`
align-items: center;
display: flex;
justify-content:flex-start;
margin:0;
min-height: 40px;
padding: 4px 8px;
    button{
        display: inline-flex;
        justify-content: center;
        align-items: center;
        padding: 0 36px;
        color:#0a66c2;
        min-height:50px;
        border: 0;
        @media(min-width:768px){
            span{
                margin-left: 8px;

            }
        }
    }
`



// ==================================(Styled-Components)================================>

export default MainSide;