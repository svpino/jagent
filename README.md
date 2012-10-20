jAgent
======

Metadata
--------
When executed, **jAgent** adds a list of classes to the `<html>` tag of the page. These classes represent the client's browser features, and every class corresponds to an specific feature. Below you can see the `<html>` tag of a page when loaded on my computer:

    <html class="webkit chrome chrome_22 mac mac_10 mac_10_8 orientation_landscape max_width_1440">

As you can see, at the time of writing this, I'm using Chrome version 22 on a Mac OS X 10.8 (Mountain Lion). The orientation of the browser is landscape (meaning the browser is wider than it's tall), and the screen size bucket assigned to the page is 1440px. Below, I'll talk a bit more about orientation and screen buckets.

### Main tags

- **Browser Engine**: gecko, webkit
- **Browser**: chrome, safari, msie, firefox, opera, konqueror, iron
- **Operating System**: mac, windows, freebsd, linux
- **Mobile**: mobile, ios, android, ipad, iphone, ipod, kindle, blackberry, playbook, j2me 
- **Orientation**: orientation_portrait, orientation_landscape
- **Additional Features**: retina

### Versioning

- **Microsoft Windows**: windows_nt, windows_2000, windows_xp, windows_vista, windows_7, windows_8
- **Apple Mac OS**: mac10, mac10_8, mac10_7, ...

#### Other

- **Browsers**: gecko, webkit, chrome, chrome22, safari, safari6, msie, msie8, firefox, firefox16, opera, opera3, konqueror, iron, mozilla  
- **Operating Systems**: mac, mac10, mac10_8, windows, windows_nt, windows_2000, windows_xp, windows_vista, windows_7, windows_8, freebsd, linux
- **Mobile devices**: mobile, ios, ios6, ios6_0, ipad, iphone, ipod, android, android4, android4_1, j2me, kindle, playbook, blackberry 
- **Screen sizes**: max_width_320, max_width_1920
- **Orientation**: orientation_portrait, orientation_landscape
- **Retina Displays**: retina