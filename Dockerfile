# FROM nginx:1.19.3-alpine
FROM yuchen168/uwsgi-nginx-unprivileged


COPY nginx.conf /etc/nginx/nginx.conf
COPY app.json /etc/uwsgi/app.json

COPY MajesticAdmin-Free-Bootstrap-Admin-Template-master.zip /usr/local/html.zip
WORKDIR /usr/local
# RUN mkdir html
RUN unzip html.zip -o -d html

# COPY uwsgi /tmp/uwsgi
# RUN install -m 755 /tmp/uwsgi /usr/bin/uwsgi
# RUN rm /tmp/uwsgi
# RUN /usr/bin/uwsgi -config=/etc/uwsgi/app.json


EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]
# nginx -g 'daemon off;'

ADD app.sh /
RUN chmod +x /app.sh
CMD /app.sh
