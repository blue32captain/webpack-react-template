import config from 'app-config'
import common from './config'
import development from './develop'
import production from './production'


const envConfig = ({
  'development': development,
  'production': production,
})[config.env]


export default envConfig(common)


