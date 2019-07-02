webpackJsonp([0x7c6d8131fade],{811:function(a,e){a.exports={data:{markdownRemark:{html:'<p>HackerOne supports Single Sign-On (SSO) through Security Assertion Markup Language 2.0 (SAML 2.0) for these providers:</p>\n<ul>\n<li><a href="/programs/google-sso-saml-setup.html">Google</a></li>\n<li><a href="/programs/okta-sso-saml-setup.html">Okta</a></li>\n<li><a href="/programs/onelogin-sso-saml-setup.html">OneLogin</a></li>\n<li><a href="https://support.bitium.com/administration/saml-hackerone/">Bitium</a></li>\n<li>Centrify</li>\n<li>MS ADFS</li>\n<li><a href="https://azuremarketplace.microsoft.com/en-us/marketplace/apps/aad.hackerone">Azure Active Directory</a></li>\n<li>Ping Identity</li>\n<li><a href="https://duo.com/docs/hackerone">Duo</a></li>\n</ul>\n<p><a href="https://support.hackerone.com/hc/en-us/requests/new">Contact HackerOne</a> if you have another SAML provider.</p>\n<h3>Set Up</h3>\n<p>To configure Single Sign-On via SAML:</p>\n<ol>\n<li>Go to: <strong>Settings > General > Authentication</strong>.</li>\n<li>In the <strong>SAML</strong> section, click <strong>Add SAML settings</strong> to add your provider information.</li>\n</ol>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/saml-setup-1-2dbda55bc1483a6983b369ca78e9e00f-62cf8.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 41.21763470958712%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAAA+ElEQVQoz6VS/0oDMQy+1x8Iwp5BxD98Al/AvwQnk7GD204ZOLXrtenu2uv9+LxGem4oODHw0SRNviZpEmstzN5Ak2aQIWitUdc12rZF0zQnIcR675GQNnhebfD2IvC+lRCvBfI8R3jorxJIk63c4HZ5g7WaY6Ue8KQfvwX2ff8rRsL1boHL2Rmu7s9xcTfB9WyK0prhshtbOST9SY4IfdPB1oBzLUpTYU8liqJgSClBRCdVORI6ZzmJhg+pbIX/CBMGsjRNGVmWcWVCCK4u6Eop1vkcbF156NIOm/Bph1jn3BdhnFFsK65BWIE4w+P16Nh36A96zP0AzEFtXSbY93kAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="saml-1"\n        title=""\n        src="/static/saml-setup-1-2dbda55bc1483a6983b369ca78e9e00f-2f183.png"\n        srcset="/static/saml-setup-1-2dbda55bc1483a6983b369ca78e9e00f-67829.png 125w,\n/static/saml-setup-1-2dbda55bc1483a6983b369ca78e9e00f-5c59f.png 250w,\n/static/saml-setup-1-2dbda55bc1483a6983b369ca78e9e00f-2f183.png 500w,\n/static/saml-setup-1-2dbda55bc1483a6983b369ca78e9e00f-c93e8.png 750w,\n/static/saml-setup-1-2dbda55bc1483a6983b369ca78e9e00f-4e628.png 1000w,\n/static/saml-setup-1-2dbda55bc1483a6983b369ca78e9e00f-62cf8.png 1429w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<ol start="3">\n<li>Enter information for these fields:</li>\n</ol>\n<table>\n<thead>\n<tr>\n<th>Field</th>\n<th>Detail</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Email Domain</td>\n<td>The email domain for users that will be required to use SAML authentication. \n<em>Note: Please use your own domain, not the HackerOne domain.</em></td>\n</tr>\n<tr>\n<td>Single Sign On URL</td>\n<td>The URL from your SAML provider to initiate a single sign-on attempt, sometimes called the login URL.</td>\n</tr>\n<tr>\n<td>X509 Certificate</td>\n<td>The certificate from your SAML provider to verify the single sign-on response</td>\n</tr>\n</tbody>\n</table>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/saml-setup-2a-5e7be350d2bce4dcef3b7edb1f2a55f2-7373f.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 90.2439024390244%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAACXBIWXMAABYlAAAWJQFJUiTwAAACAUlEQVQ4y6WUSU/DQAyF8/9/AXeuiAMqF+gBISE4kHTfl3RVq6b7oqpLMPlcXJUiAYKRnmbscd482zNx7u/jUq1WpVAoSD6fF79el1azKc1GQ5rMv0Ajiu12uxKLxcRJpVIyGAzUAcK3UP460um0OJ7nSa/XE9/3ZTqdymq5lNFopFgsFrLZbH7Eer1WwkQiIU4mk5H5fC7D4VCVLiNCYGTfjTAMFbvdTu1kMnlQ2Gq1tI6ohBgyDplMJjIej3VGMWsDPpRBZgcrIQpxEACCIFCls9lMSSEH2Kacmb3tdvtVIXkTDAk1/MuAlEGDoy6noxRGmnI9ujLtdltB6qaQ+XRtM0pN+bEpsFYqFWUnfWTTfmqLjyDzZbNZtW2PeOxOp6OEruseCMvlsgbwkYHgU2Ls8xgOgpD7eyRkg+7mcjkNKpVKUiwWdeYg1rwibBQSgw/wsrD7/b4Scrh2mZpRQwhqtZqWANvWzAZsYLGAhh4JOcEI2UTJqTrWEJABa2LYM9U0kgYeCakBQaRDAGmgmg/4ED+1gxC/1Rbgs6f7iRAiCmx1BBCjkMN4SfZnQS1/F0Bm2IPgkLLrfXSZu2QfMVNkXs1qtZL9fq/gNdj63Pe2P1zwhBfdQ9T9d+SDZ7ltXMjT64M48XhclVEv66CBRn0HYuo1Xx7dO7l5uZTrmyt5BwymLrO3sQO+AAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="saml-2"\n        title=""\n        src="/static/saml-setup-2a-5e7be350d2bce4dcef3b7edb1f2a55f2-2f183.png"\n        srcset="/static/saml-setup-2a-5e7be350d2bce4dcef3b7edb1f2a55f2-67829.png 125w,\n/static/saml-setup-2a-5e7be350d2bce4dcef3b7edb1f2a55f2-5c59f.png 250w,\n/static/saml-setup-2a-5e7be350d2bce4dcef3b7edb1f2a55f2-2f183.png 500w,\n/static/saml-setup-2a-5e7be350d2bce4dcef3b7edb1f2a55f2-c93e8.png 750w,\n/static/saml-setup-2a-5e7be350d2bce4dcef3b7edb1f2a55f2-4e628.png 1000w,\n/static/saml-setup-2a-5e7be350d2bce4dcef3b7edb1f2a55f2-7373f.png 1435w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<ol start="4">\n<li>Click <strong>Run test</strong>. This will launch a new window that\'ll allow a test login.</li>\n</ol>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/saml-setup-3-9e269fb6b08bd10ea30f1b2531bb0fba-3d8dc.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 42.76315789473684%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAABYlAAAWJQFJUiTwAAABHklEQVQoz41SyW6DUAzkY/sjvfYneulX9Nh7z0SIhEDgkbCEfQvLNGPpRTRKlT5pZI9tbI+FoZQC3zzPmKbpKVina7W/5sbhcIDneQhUCJXkqOv6Idq2xfl8xna7RVmWwrMsg+M4KIoCTdNIzDBNE5ZlSXCcZozj+CeGYUDXdeJzI80vl8utxqDk0+kk3Z+9ZVl+cUq8zxuUG4YhgiBAmqbo+16magn0aQluordhs2VeUHQpwnKPpFbXra8bbjYb2LaN3W4nt6T0qqrkXhygLcGmSZJIrB962erT+sDb1wvev1/RDCWM4/GIOI5FNn0W86M8z/8lmbG1Fcm+7wsom9x1XeEcwgFEFEW3O+vGD294/4+tub6X9ol1XufW+AF/sLaJO9jHNAAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="saml-3"\n        title=""\n        src="/static/saml-setup-3-9e269fb6b08bd10ea30f1b2531bb0fba-2f183.png"\n        srcset="/static/saml-setup-3-9e269fb6b08bd10ea30f1b2531bb0fba-67829.png 125w,\n/static/saml-setup-3-9e269fb6b08bd10ea30f1b2531bb0fba-5c59f.png 250w,\n/static/saml-setup-3-9e269fb6b08bd10ea30f1b2531bb0fba-2f183.png 500w,\n/static/saml-setup-3-9e269fb6b08bd10ea30f1b2531bb0fba-c93e8.png 750w,\n/static/saml-setup-3-9e269fb6b08bd10ea30f1b2531bb0fba-4e628.png 1000w,\n/static/saml-setup-3-9e269fb6b08bd10ea30f1b2531bb0fba-3d8dc.png 1368w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<ol start="5">\n<li>Enter your login credentials to the test window. After your login attempt, the test will either succeed or fail and provide warning messages about your test login in the <strong>Status</strong> section.</li>\n<li>Click the <strong>Run another test</strong> link if your test fails. If your test is successful, request approval of your settings by clicking <strong>Request Verification</strong>.</li>\n</ol>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/saml-setup-4-a1b0376da77b13e5c661546bc6810e80-738f8.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 42.627737226277375%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAABYlAAAWJQFJUiTwAAABaklEQVQoz6VSS07DMBD10VhzAo7BkjVX4BJsypYFCMEB2BWJRG2Tpk2aD81PjfOxnceM2yIElVgQ6Wk80RvPm+cR6/Ua4zhCa/1vGGMgVnRhsFwi2mwQfZTY7XYn0TQNyrLEYj5HXVVoW7nPFwuKxZ4jGwjHceC6LioiaeqglDoJVtD3A2TbQXY9OjoPwwA9aIwGwAgYTQrDMMSG1LGCv75eafhJhbSSaDoFQze1ipQNtUWvOhp5tUIURWAvt9utVdP3pKDraKz2C5xz05C4WZaiqSWi0sPVwzmuny9weX+Gu7cbiNlsBobneZiTPwzf921M09T6VBSFbVbXNabTKVhEkZfIihgv3gRPzgSP7i3e01eIOI5tIY/N4JxjlmW/RmbP2CLm5HlOOXmrACkBstZ6KXhUJnHk0bl7EAT2X5IktpDBDfjhWDlfeFwTbWhlRr2PBPFzj77nrOj4wnw+5ry35rARhusOYN4nnrStey5phFoAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="saml-4"\n        title=""\n        src="/static/saml-setup-4-a1b0376da77b13e5c661546bc6810e80-2f183.png"\n        srcset="/static/saml-setup-4-a1b0376da77b13e5c661546bc6810e80-67829.png 125w,\n/static/saml-setup-4-a1b0376da77b13e5c661546bc6810e80-5c59f.png 250w,\n/static/saml-setup-4-a1b0376da77b13e5c661546bc6810e80-2f183.png 500w,\n/static/saml-setup-4-a1b0376da77b13e5c661546bc6810e80-c93e8.png 750w,\n/static/saml-setup-4-a1b0376da77b13e5c661546bc6810e80-4e628.png 1000w,\n/static/saml-setup-4-a1b0376da77b13e5c661546bc6810e80-738f8.png 1370w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<ol start="8">\n<li>HackerOne will review and verify your SAML settings and notify you within 1 business day after the review is complete.</li>\n<li>After HackerOne approves your request, click the <strong>Migrate Users</strong> button when you\'re ready to enable SAML for all of your users.</li>\n</ol>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/saml-setup-5-8fe6abc97f2792fc63065cebb0db149b-1a4fb.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 42.72058823529412%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAABYlAAAWJQFJUiTwAAABTklEQVQoz4VS20rDQBDNlwn+iX8gfoU/4Hf4qvgg6KsgIhRKmjQXc6G5NUmTJtlsctyZNhC02oHD2WFn53JmtSRJQDaOI4ZhOAuy/3zNdV04joPNZoNtsUNVVSdR1zXSNIVpmiiKgv08z9knnmK05XIJXddRliWklOj7/k90XYdm36AXPQY5sF/VleIWnegYWhAEiKIIbdvinA1KFokDxCjViOOvGB45DEP4vs+tU5dCCK5ORSaQX6puDN+GGTiIygxFk+Pdf8ZH+II37wnuVj+MvFqtYBgG83q9hmVZrA11nmUZg/QrlXaB5yNQxetij6/UwM3jJW5fr3D9cIH7xR00ekTBcRxzgokpyU9r2gbUAN2TtaKBlS4YZvKJZBdCs20bnufxpiemDkkK+lIESk6FaItzG09pOG2WeH6etkp6zs/01+axvVT38sjK/wYvV67Zik5+GwAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="saml-5"\n        title=""\n        src="/static/saml-setup-5-8fe6abc97f2792fc63065cebb0db149b-2f183.png"\n        srcset="/static/saml-setup-5-8fe6abc97f2792fc63065cebb0db149b-67829.png 125w,\n/static/saml-setup-5-8fe6abc97f2792fc63065cebb0db149b-5c59f.png 250w,\n/static/saml-setup-5-8fe6abc97f2792fc63065cebb0db149b-2f183.png 500w,\n/static/saml-setup-5-8fe6abc97f2792fc63065cebb0db149b-c93e8.png 750w,\n/static/saml-setup-5-8fe6abc97f2792fc63065cebb0db149b-4e628.png 1000w,\n/static/saml-setup-5-8fe6abc97f2792fc63065cebb0db149b-1a4fb.png 1360w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<blockquote>\n<p><i>Note: Your program must be launched and not in sandbox mode to set up SAML.</i></p>\n</blockquote>\n<h3>Additional Information</h3>\n<p>Here are some screenshots that provide additional details on Service Provider and Attribute mapping:</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/saml-1-8f3156293af7a8d1bf2e2a9e5d6e517f-8688c.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 49.58775029446408%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAAAsSAAALEgHS3X78AAAA/0lEQVQoz22R6w6DIAyFff+nNFFAQAZeuIj+2KFM3JKdmIbafvRCt23bNE1CCE5ijHvvD1JKqdp2aG5Vt+87SOBEjsMwrOsagt9veVI9wMYYj1tdCGHWM3CttbXWGKOVFlxoPVfhz8uYWRehzLIsOecHxi8UdM6d53ldFwZBJ7DhFmpSL6Vybf6BMTNuBVkDBRaCMYYbYcdxRALqt4I/MFLRGWKAYdECAbKMQELO8U8FZpxb59BwhdGclNJa17aKnO89/cCc3gnzwD9zlovzKV00RVUm/Yf7vmffsDFwtVIIgcS2lFIYoVwTy/fA7fVKqCoE7Ixe+yO4NYeCId56AywsOa/Na7+GAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="saml1"\n        title=""\n        src="/static/saml-1-8f3156293af7a8d1bf2e2a9e5d6e517f-2f183.png"\n        srcset="/static/saml-1-8f3156293af7a8d1bf2e2a9e5d6e517f-67829.png 125w,\n/static/saml-1-8f3156293af7a8d1bf2e2a9e5d6e517f-5c59f.png 250w,\n/static/saml-1-8f3156293af7a8d1bf2e2a9e5d6e517f-2f183.png 500w,\n/static/saml-1-8f3156293af7a8d1bf2e2a9e5d6e517f-c93e8.png 750w,\n/static/saml-1-8f3156293af7a8d1bf2e2a9e5d6e517f-4e628.png 1000w,\n/static/saml-1-8f3156293af7a8d1bf2e2a9e5d6e517f-b3ac4.png 1500w,\n/static/saml-1-8f3156293af7a8d1bf2e2a9e5d6e517f-8688c.png 1698w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/saml-2-5463059e51b73a99c70af98744f6d0dc-96084.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 50.59241706161137%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAAAsSAAALEgHS3X78AAAA3UlEQVQoz3WRyRaCMAxF+f8vhJ3lMFgoMgnF4sJLgxxBuAsakrwMbdD3fZIkWZ7Hcay1nqbXwnqs53RBMAxDlqHNlbqlafpcGASx+FprX2cEBIwxiMvS1HWNTf/Ul7trXVUVpXE652SEo7htW8I0cZ5xHB8eQvM8sxclsFEeRljETdMURUGS1GZOY8ivKIen6zrsbc+TzgwstQGNdMbgV8TY1nMUk4d4W4nOpUc6U5pbkLlOxG8P68mtwOwRG+dvaCeWwWqP3Nn2sN+nPq66EyuloigKw5DxaHKV+s8HAEg9qKQIbZAAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="saml_2"\n        title=""\n        src="/static/saml-2-5463059e51b73a99c70af98744f6d0dc-2f183.png"\n        srcset="/static/saml-2-5463059e51b73a99c70af98744f6d0dc-67829.png 125w,\n/static/saml-2-5463059e51b73a99c70af98744f6d0dc-5c59f.png 250w,\n/static/saml-2-5463059e51b73a99c70af98744f6d0dc-2f183.png 500w,\n/static/saml-2-5463059e51b73a99c70af98744f6d0dc-c93e8.png 750w,\n/static/saml-2-5463059e51b73a99c70af98744f6d0dc-4e628.png 1000w,\n/static/saml-2-5463059e51b73a99c70af98744f6d0dc-b3ac4.png 1500w,\n/static/saml-2-5463059e51b73a99c70af98744f6d0dc-96084.png 1688w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>',frontmatter:{path:"/programs/single-sign-on-sso-via-saml.html",id:"programs/single-sign-on-sso-via-saml",title:"Single Sign-On (SSO) via SAML",description:null}}},pathContext:{}}}});
//# sourceMappingURL=path---programs-single-sign-on-sso-via-saml-html-41220a0ecce4c0c5faa1.js.map