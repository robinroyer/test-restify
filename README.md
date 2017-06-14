
* A local mongo server running
```
mkdir .db
sudo mongod --dbpath .db/
```

* A local redis server running
``` redis-server ```

Then, just type ```node bin/server``` and start doing requests on http://localhost:8000 or whatever port you set in your shitty config

### Tests

Test are run using mocha, just type ```npm test```

### Workflow

* To ensure a good code quality, please set up your git's hooks
```
cd .git/hooks
ln -s -f ../../hooks/pre-push ./pre-push
```

* You can avoid checking with
```
git push --no-verify
```
