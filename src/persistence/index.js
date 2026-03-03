const impl = process.env.MYSQL_HOST
    ? (await import('./mysql.js')).default
    : (await import('./sqlite.js')).default;

export default impl;
