import default_ from './default';
import development from './development';
import production from './production';

const environments = {
    development,
    production
}

export default Object.assign(
    default_,
    environments[process.env.NODE_ENV || 'development']
)
