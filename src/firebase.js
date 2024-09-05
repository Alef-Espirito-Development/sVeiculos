// firebase.js
const admin = require('firebase-admin');
const dotenv = require('dotenv');

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

// Inicializa o Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert({

    type: "service_account",
    project_id: "organize-32850",
    private_key_id: "81a4a8e8bc34faab20afc5900799d648a5c2e7d8",
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCfBDaLMSXxXN3d\n+YJUMSgTaGL/rZZiDCnj8rpQJiboeWx8sKKUguJCIUNyysHgtj5PVayX5gUX6wNq\nMKUf2O5Je19qQ7pVPBQq3PiZaIJVAptbF3zF2NMKQP2Byf1FPvhjCO//weDQT4ip\nscXa8j79pFgsvF7/BjU+Nxs6y/ywWlopQjzgfJ+TbLUKwKWklvj3n0UmIK23VjWE\nVYSHOnm1T7ExQSBsDx7qssYvHcyL9+ir90bPRczr6mXEwpe7uAEHGkLBexxNF7QG\nZ8iLJKOVJkpDe1/fecZ2dgPc50p/ytePwBmkWT6teOewBvl5oM269b9roEiaWVPy\nK87C/pORAgMBAAECggEADJ47N3GDiwLyk8Fk4zTmXZ84Jy/kAcI+Kw7Q/s3+4uN1\nusbnvm9MsHDZcbkJ8utLMk+Vqz+u/POiuPuvXVcBAOw3s/k4Bo5GpGhrQqhtb9JN\n4nJ7QxYo7Zn0HnyD1YmWZgITd0uawQo6nt/oLRmcFX5DxUL/qm7DQqgBSA8KmAdn\nVA2LTM+ecbuaHMF6E9oBTTXNY2DgBGx9RvX9Kki3HamG2tVneejAXv6YtcSugnyo\n1ziGdqNUZzvh4GWYNvjItYNzrizwKzEbar2WBI26beUXjJjFU/SO9xBM4X3hTwBs\nqoHj8ODTtWhpeGraoE4YDno1uw/IDF4PBEBWyGTH5QKBgQDVIcSErEVXDqkmeo17\n/3ByLhdVqdQAzC4s8/bDU94hjg+266/psNh24skmp9NuYqXlzuZSiLhHGxC2TyMo\nVvdTmEmnVD1XDxEW+K38EguPK451kPzMPTi8lg2Sq6FD12tVjr5jOp/lkN81mESF\n76jBJOQi6thm63f7ksK3EFPdDQKBgQC/AAXprQS6IQ18nnA8nCiOytrhx383Thoa\ny/ZnbibRt3980vVjLyGn0Vq9jRrGwpaDwvyZGXeWBlRVKvap5oXXrv2TEoj3z/Yq\nl6OArnS4bRQ1kxWTUr3uUvZO8vS4qNZj+6eToRQllIcDCtvFs/cJ4zTX6RqoxhCe\n+B6GSW3XlQKBgDBtQsTOi9bTGvYGRJ2XFcqr1Ft/gg9IVXmbWUdaiA9hwwpSFR9p\nMlYZA5GH8o+TVJSZ5VV9gTmO2cZCxv9Ee2AAK0Qc7O8aGkz45jdvNjcqs2zdK8OQ\naZLYGW9pFfRfPyEqlPHhATHdMApydadlJBf2tOuGJvODrzh3SUzlJdkFAoGBAKxj\nifKp3b1c/b4/hk++JgETaFEl7VVuYbNT6fbafaEFPMTd5ur5bCf6lirFQ6inkpAk\nGjbYvI2k8tLX7z/Tt3O/FlF7BjKc+bLhoIoRa3nVwcrFEVEh+hkzuenx8R0GDlK5\nnTtqxDNTBjShxVCAqPS8pEJHu28fLXs9uNc9SS2tAoGBAMnrHCmyguGOhzPaLlX5\nD2ZnRRoKhk3OdNs7csYeH+Vw/YVeoDFTjvcMrVEakq+Tp0vz/Dbill4s6PugwvAD\nVdydpibcbcOHaH5XjyWbRRwhww/+MN8NFtvwBfmL78wFq4JSR5o28Hk1Z5vuAwcQ\nXCBtjHVdo5nah7HtLQV3glwJ\n-----END PRIVATE KEY-----\n",
    client_email: "firebase-adminsdk-1k3at@organize-32850.iam.gserviceaccount.com",
    client_id: "102682675136449071948",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-1k3at%40organize-32850.iam.gserviceaccount.com",
    universe_domain: "googleapis.com"

  }),
});

const db = admin.firestore();

module.exports = { db };
